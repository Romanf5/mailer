import React from 'react';
import PropTypes from 'prop-types';

const MessageCounter = ({counter}) => {
    return counter ? <span className={'navigation__counter'}> {counter} </span> : null;
};

MessageCounter.prototype = {
    connect: PropTypes.number
};

export default MessageCounter;


