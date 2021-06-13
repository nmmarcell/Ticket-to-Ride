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

const addPlayer = (name, picture) => {
    const data = {name: name, picture: picture};
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

const actions = {
    draw,
    changeGameState,
    chooseDestination,
    addPlayer,
    nextPlayer,
    initializeStore,
    setHoverObject,
    buildConnection,
    updateState
};

export default actions;