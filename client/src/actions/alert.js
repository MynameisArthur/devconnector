import uuid from 'uuid';
import { dcTypes as types } from './types';

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
    const id = uuid.v4();
    dispatch({
        type: types.SET_ALERT,
        payload: { msg, alertType, id }
    });
    setTimeout(() => dispatch({ type: types.REMOVE_ALERT, payload: id }), timeout);
};


