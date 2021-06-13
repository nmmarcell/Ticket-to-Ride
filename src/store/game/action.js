import { types } from "./types";

const draw = (color) => {
    return dispatch => dispatch({type: types.DRAW_CARD, color: color});
}

const changeGameState = (state) => {
    return dispatch => dispatch({type: types.CHAGE_GAMESTATE, state: state});
}

const chooseDestination = (id) => {
    return dispatch => dispatch({type: types.CHOOSE_DESTINATION, destinationID: id});
}

const addPlayer = (name, picture, socketID) => {
    const data = {name: name, picture: picture, socketID: socketID};
    return dispatch => dispatch({type: types.ADD_PLAYER, data});
}

const nextPlayer = (nextID) => {
    return dispatch => dispatch({type: types.NEXT_PLAYER, next: nextID}); 
}

const initializeStore = () => {
    return dispatch => dispatch({type: types.INITIALIZE_STORE}); 
}

const setHoverObject = (cities) => {
    return dispatch => dispatch({type: types.SET_HOVEROBJECT, cities: cities}); 
}

const buildConnection = (connection) => {
    return dispatch => dispatch({type: types.BUILD_CONNECTION, connection: connection}); 
}

const updateState = ( state ) => {
    return dispatch => dispatch( {type: types.UPDATE_STATE, state: state} );
}

const initializeRoomID = (roomID) => {
    return dispatch => dispatch( {type: types.INITIALIZE_ROOMID, roomID: roomID} );
}

const resetStore = () => {
    return dispatch => dispatch( {type: types.RESET_STORE} );
}

const actions = {
    draw,
    changeGameState,
    chooseDestination,
    addPlayer,
    nextPlayer,
    initializeStore,
    setHoverObject,
    buildConnection,
    updateState,
    initializeRoomID,
    resetStore
};

export default actions;