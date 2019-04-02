import React from 'react';
import MessageList from '../../components/messages-list/controllers';
import protectRout from './../../controllers/protected-route';

const Trash = () => <MessageList/>;
export default protectRout(Trash);
