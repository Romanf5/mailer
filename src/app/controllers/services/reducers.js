import {
    OPEN_NEW_MESSAGES_PORTAL,
    CLOSE_NEW_MESSAGES_PORTAL,
    SEND_EMAIL_SUCCESS,
    SEND_EMAIL_REQUEST,
    SEND_EMAIL_FALSY
} from './constants';

const DEFAULT_STATE = {
    showPortal: false
};

export const portal = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case OPEN_NEW_MESSAGES_PORTAL: {
            return {
                ...state,
                showPortal: true
            };
        }

        case CLOSE_NEW_MESSAGES_PORTAL: {
            return {
                ...state,
                showPortal: false
            };
        }

        case SEND_EMAIL_REQUEST : {
            return {
                ...state,
                showPortal: false
            };
        }

        case SEND_EMAIL_SUCCESS: {
            return {
                ...state,
                showPortal: false
            };
        }

        case SEND_EMAIL_FALSY: {
            return {
                ...state,
                showPortal: true
            };
        }

        default:
            return state;
    }
};
