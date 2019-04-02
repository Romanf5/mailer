import React from 'react';
import PropTypes from 'prop-types';

import Message from './../message';
import './assets/styles.styl';

const MessageGroup = ({date, data, handlerStatus, clickMessages, expandedId}) => {
    return (
        <div className="message-group">

            <div className="message-group__title">
                {date}
            </div>

            <div className="message-group__inner">
                {
                    data.map(({id, from, subject, messageBody, statusRead, to, prevState, location}) => (
                        <Message
                            key={id}
                            id={id}
                            from={from}
                            subject={subject}
                            messageBody={messageBody}
                            statusRead={statusRead}
                            expanded={expandedId === id}
                            onClickMessage={clickMessages}
                            changeStatus={handlerStatus}
                            to={to}
                            location={location}
                            prevState={prevState}
                        />))
                }
            </div>

        </div>
    );
};

Message.propTypes = {
    date: PropTypes.string,
    data: PropTypes.PropTypes.arrayOf(PropTypes.object),
    handlerStatus: PropTypes.func,
    expandedId: PropTypes.string,
    clickMessages: PropTypes.func
};

export default MessageGroup;

