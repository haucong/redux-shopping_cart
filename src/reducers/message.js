import * as Message from './../constants/Message';
import * as Types from './../constants/ActionTypes';
// import { actChangeMessage } from '../actions';

var initialState = Message.MSG_WELLCOME;

const message = (state = initialState, action) => {
    switch (action.type) {
        case  Types.CHANGE_MSG:
            return action.message;
        default: return state;
    }
}
export default message;