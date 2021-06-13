import { types } from "./types";
//import { types } from "../game/types";
import gameAction from "../game/action";
import socket from "../../socket.js";

const syncState = ( roomID, state ) => dispatch => {
    socket.emit('sync-state', roomID, state, true, (syncResponse) => {
        if(syncResponse.status === 'ok') {
            dispatch( {type: types.SYNC_STATE} );
        }
        else {
            console.log(syncResponse.message);
        }
    })
}

const getState = ( roomID ) => dispatch => {
    socket.emit('get-state', roomID, (getResponse) => {
        if(getResponse === 'ok') {
            dispatch( {type: types.GET_STATE} );
        }
        else {
            console.log(getResponse.message);
        }
    });
}

const createRoom = ( playerNumber, gameState ) => dispatch => {
    socket.emit('create-room', playerNumber, (socketResponse) => {
        if(socketResponse.status === 'ok') {
            dispatch({ type: types.CREATE_ROOM, roomID: socketResponse.roomId});
            socket.emit('sync-state', socketResponse.roomId, gameState, false, (syncResponse) => {
                if(syncResponse.status === 'ok') {
                    dispatch( {type: types.SYNC_STATE} );
                }
                else console.log(syncResponse.message);
            });
        }
        else {
            console.log("balhé van pali");
        } 
    });
}

const joinRoom = ( roomID, gameState ) => dispatch => {
    socket.emit('join-room', roomID, ( joinResponse ) => {
        if(joinResponse.status === 'ok') {
            dispatch( {type: types.JOIN_ROOM, roomID: roomID} );
            socket.emit('get-state', roomID, (getResponse) => {
                if(getResponse.status === 'ok') {
                    dispatch( {type: types.GET_STATE} );
                    const serverState = JSON.parse(getResponse.state);
                    
                    const newState = {
                        ...serverState,
                        players: [...gameState.players, ...serverState.players],                        
                    }

                    console.log(newState);
                    
                    //saját state-be itt nem kerül be ami lejött
                    gameAction.updateState(newState);

                    //dispatch({type: gameTypes.UPDATE_STATE, state: JSON.parse(getResponse.state)});

                    socket.emit('sync-state', roomID, newState, false, (syncResponse) => {
                        if(syncResponse.status === 'ok') dispatch( {type: types.SYNC_STATE} );
                    });
                }
            });
        }
        else {
            console.log(joinResponse.message);
        }
    });
} 



const actions = {
    syncState,
    getState,
    createRoom,
    joinRoom
};
export default actions;