import {
    LOAD_MESSAGES_REQUEST,
    LOAD_MESSAGES_SUCCESS,
    LOAD_MESSAGES_FALSY,
    UPDATE_MESSAGE_REQUEST,
    UPDATE_MESSAGE_SUCCESS,
    CHANGE_STATUS_MESSAGES_SUCCESS
} from './constants';

const DEFAULT_STATE = {
    panding: false,
    data: null,
    showLoader: false
};

export const messages = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case LOAD_MESSAGES_REQUEST: {
            return {
                ...state,
                panding: true,
                showLoader: true
            };
        }

        case LOAD_MESSAGES_SUCCESS: {
            return {
                ...state,
                data: action.response,
                panding: false,
                showLoader: false
            };
        }

        case LOAD_MESSAGES_FALSY: {
            return {
                ...state
            };
        }

        case UPDATE_MESSAGE_REQUEST: {
            return {
                ...state,
                showLoader: true,
                panding: true
            };
        }

        case UPDATE_MESSAGE_SUCCESS: {
            return {
                ...state,
                panding: false
            };
        }

        case CHANGE_STATUS_MESSAGES_SUCCESS: {
            return {
                ...state
            };
        }

        default: {
            return {
                ...state
            };
        }
    }
};
