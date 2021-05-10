import { types } from "./types";

const logAction = (faszJanos) => {
    console.log(faszJanos);
    return dispatch => dispatch({type: types.FASZ_JANOS});
}

const actions = {
    logAction
};

export default actions;