import { types } from "./types";

const draw = (color) => {
    return dispatch => dispatch({type: types.FASZ_JANOS, color: color});
}

const actions = {
    draw
};

export default actions;