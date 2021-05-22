import { types } from "./types";

const draw = (color) => {
    return dispatch => dispatch({type: types.DRAW_CARD, color: color});
}

const changeGameState = (state) => {
    return dispatch => dispatch({type: types.CHAGE_GAMESTATE, state: state});
}

const chooseDestination = (dest) => {
    return dispatch => dispatch({type: types.CHOOSE_DESTINATION, destination: dest});
}

const addPlayer = (name, picture) => {
    const data = {name: name, picture: picture};
    return dispatch => dispatch({type: types.ADD_PLAYER, data});
}

const actions = {
    draw,
    changeGameState,
    chooseDestination,
    addPlayer
};

export default actions;