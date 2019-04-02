import {authRef, provider} from './../db';
import {GET_USER} from './constants';

export const getUser = () => dispatch => {
    authRef.onAuthStateChanged(user => {
        if (user) {
            dispatch({
                type: GET_USER,
                payload: user
            });
        } else {
            dispatch({
                type: GET_USER,
                payload: null
            });
        }
    });
};

export const signIn = () => dispatch => {
    authRef
        .signInWithPopup(provider)
        .then(result => {
        })
        .catch(error => {
        });
};

export const signOut = () => dispatch => {
    authRef
        .signOut()
        .then(() => {
        })
        .catch(error => {
        });
};
