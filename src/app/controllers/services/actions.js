import {
    OPEN_NEW_MESSAGES_PORTAL,
    CLOSE_NEW_MESSAGES_PORTAL,
    SEND_EMAIL_REQUEST
} from './constants';

import {getCollection} from './../../../db';

export const openPortal = () => ({
    type: OPEN_NEW_MESSAGES_PORTAL
});

export const closePortal = () => ({
    type: CLOSE_NEW_MESSAGES_PORTAL
});

export const sendEmail = (fromDataObject, toDataObject) => dispatch => {

    dispatch({type: SEND_EMAIL_REQUEST});

    getCollection(fromDataObject.to).add(toDataObject);
    getCollection(toDataObject.from).add(fromDataObject);

};
