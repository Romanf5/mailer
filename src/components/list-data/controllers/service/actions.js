import {
    LOAD_MESSAGES_REQUEST,
    LOAD_MESSAGES_SUCCESS,
    LOAD_MESSAGES_FALSY,
    UPDATE_MESSAGE_SUCCESS,
    UPDATE_MESSAGE_REQUEST,
    CHANGE_STATUS_MESSAGES_SUCCESS
} from './constants';
import {getCollection} from './../../../../db';

export const loadMessages = () => (dispatch, getState) => {
    const {panding, data} = getState().messages;
    const {email} = getState().auth;

    if (panding || data) {
        return;
    }

    dispatch({type: LOAD_MESSAGES_REQUEST});

    getCollection(email).onSnapshot(snapshot => {
        const transformData = snapshot.docs.map(doc => ({
            id: doc.id,
            from: doc.data().from,
            subject: doc.data().subject,
            messageBody: doc.data().message_body,
            date: doc.data().message_date,
            location: doc.data().location,
            statusRead: doc.data().isRead,
            to: doc.data().to,
            prevState: doc.data().prevLocation
        }));

        if (!Array.isArray(transformData)) {
            dispatch({type: LOAD_MESSAGES_FALSY});
        }

        dispatch({
            type: LOAD_MESSAGES_SUCCESS,
            response: transformData
        });
    });
};

export const updateMessages = id => (dispatch, getState) => {
    const {panding} = getState().messages;
    const {email} = getState().auth;

    if (panding) {
        return;
    }

    dispatch({type: UPDATE_MESSAGE_REQUEST});

    getCollection(email).doc(id).update({
        isRead: true
    }).then(() => {
        dispatch({type: UPDATE_MESSAGE_SUCCESS});
    });

};

export const changeStatus = (currentStatus, id, location, prevState) => (dispatch, getState) => {
    const {email} = getState().auth;

    if (currentStatus !== '/back' && currentStatus !== '/trash-forever') {
        getCollection(email)
            .doc(id)
            .update({
                location: currentStatus,
                prevLocation: location
            })
            .then(
                dispatch({type: CHANGE_STATUS_MESSAGES_SUCCESS})
            );
    }

    if (currentStatus === '/back') {
        getCollection(email)
            .doc(id)
            .update({
                location: prevState,
                prevLocation: location
            })
            .then(dispatch({type: CHANGE_STATUS_MESSAGES_SUCCESS}));
    }

    if (currentStatus === '/trash-forever') {
        getCollection(email)
            .doc(id).delete()
            .then(dispatch({type: CHANGE_STATUS_MESSAGES_SUCCESS}));
    }
};
