import { types } from "./types";
import { types as gameTypes } from "../game/types";
import gameAction from "../game/action";
import socket from "../../socket.js";
import { useHistory } from "react-router";

const syncState = ( roomID, state ) => dispatch => {
    socket.emit('sync-state', roomID, state, false, (syncResponse) => {
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
            dispatch( {type: gameTypes.INITIALIZE_ROOMID, roomID: socketResponse.roomId} )
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

const joinRoom = ( roomID, gameState, history ) => dispatch => {
    socket.emit('join-room', roomID, ( joinResponse ) => {
        if(joinResponse.status === 'ok') {
            dispatch( {type: types.JOIN_ROOM, roomID: roomID} );
            dispatch( {type: gameTypes.INITIALIZE_ROOMID, roomID: roomID} )
            socket.emit('get-state', roomID, (getResponse) => {
                if(getResponse.status === 'ok') {
                    dispatch( {type: types.GET_STATE} );
                    const serverState = JSON.parse(getResponse.state);
                    
                    const newState = {
                        ...serverState,
                        players: [...serverState.players, ...gameState.players],                        
                    }
                    dispatch({type: gameTypes.UPDATE_STATE, state: newState});

                    socket.emit('sync-state', roomID, newState, false, (syncResponse) => {
                        if(syncResponse.status === 'ok') dispatch( {type: types.SYNC_STATE} );
                    });
                }
            });
        }
        else {
            alert("Sikertelen csatlakozás");
            history.push("joinlobby");
            dispatch( {type: gameTypes.RESET_STORE} );
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