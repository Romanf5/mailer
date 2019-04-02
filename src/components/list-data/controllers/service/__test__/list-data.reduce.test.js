import {messages} from './../reducer';
import {
    LOAD_MESSAGES_REQUEST,
    LOAD_MESSAGES_SUCCESS,
    LOAD_MESSAGES_FALSY
} from '../constants';

describe('Messages reducer ::LOAD_MESSAGES_REQUEST', () => {
    describe('When coll LOAD_MESSAGES_REQUEST', () => {
        it('should change state pending and showLoader on true', () => {
            const action = {
                type: LOAD_MESSAGES_REQUEST
            };

            const defaultState = {
                panding: false,
                data: null,
                showLoader: false
            };

            const output = {
                ...defaultState,
                panding: true,
                showLoader: true
            };

            expect(messages(defaultState, action)).toEqual(output);
        });
    });

    describe('When coll LOAD_MESSAGES_SUCCESS', () => {
        it('should change state pending and showLoader on false and load data', () => {
            const action = {
                type: LOAD_MESSAGES_SUCCESS,
                response: [{id: 1}]
            };

            const defaultState = {
                panding: true,
                data: null,
                showLoader: true
            };

            const output = {
                ...defaultState,
                panding: false,
                showLoader: false,
                data: action.response
            };

            expect(messages(defaultState, action)).toEqual(output);
        });
    });

    describe('When coll LOAD_MESSAGES_FALSY', () => {
        it('state not update', () => {
            const action = {
                type: LOAD_MESSAGES_FALSY
            };

            const defaultState = {
                panding: true,
                data: null,
                showLoader: true
            };

            const output = {
                ...defaultState
            };

            expect(messages(defaultState, action)).toEqual(output);
        });
    });

    describe('If not declared type of action', () => {
        it('state not update', () => {
            const action = {
                type: 'TEST'
            };

            const defaultState = {
                panding: true,
                data: null,
                showLoader: true
            };

            const output = {
                ...defaultState
            };

            expect(messages(defaultState, action)).toEqual(output);
        });
    });
});
