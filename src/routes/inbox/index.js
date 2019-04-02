import React, {Component} from 'react';

import MessageList from '../../components/messages-list/controllers';
import protectRout from './../../controllers/protected-route';


class Inbox extends Component {

    render() {
        return (
            <MessageList/>
        );
    }

}

export default protectRout(Inbox);
