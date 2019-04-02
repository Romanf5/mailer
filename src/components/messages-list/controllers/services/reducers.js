import {OPEN_MESSAGE, CLOSE_MESSAGE} from './constants';

const DEFAULT_STATE = {
    activeMessageId: null
};

export const messageStatus = (state = DEFAULT_STATE, action) => {

    switch (action.type) {

        case OPEN_MESSAGE:
            return {
                ...state,
                activeMessageId: action.activeId
            };

        case CLOSE_MESSAGE:
            return {
                ...state,
                activeMessageId: action.activeId
            };

        default:
            return state;
    }

};
