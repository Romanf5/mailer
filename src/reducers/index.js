import {combineReducers} from 'redux';

import {portal} from './../app/controllers/services/reducers';
import {auth} from './../auth/reducers';
import {messages} from './../components/list-data/controllers/service/reducer';
import {messageStatus} from './../components/messages-list/controllers/services/reducers';

export default combineReducers(
    {
        portal,
        auth,
        messages,
        messageStatus
    }
);
