import React from 'react';
import PropTypes from 'prop-types';

import StatrusButton from './../status-button';
import './styles.styl';

const Message = props => {

    const {
        id,
        from,
        to,
        subject,
        messageBody,
        statusRead,
        expanded,
        onClickMessage,
        changeStatus,
        location,
        prevState
    } = props;

    const textTrim = (str, maxLength = 40) => {
        if (str.length > maxLength) {
            return (str.substring(0, maxLength - 3) + '...');
        }
        return str;
    };

    const messageClick = () => {
        onClickMessage(id);

        if (!statusRead) {
            changeStatus(id);
        }
    };

    let collectionButton = [];

    if (location === '/spam') {
        collectionButton = ['/inbox', '/trash'];
    }

    if (location === '/inbox') {
        collectionButton = ['/spam', '/trash'];
    }

    if (location === '/trash') {
        collectionButton = ['/back', '/trash-forever'];
    }

    if (location === '/sent') {
        collectionButton = ['/trash'];
    }

    const choseVariation = from ?
        <div className={'full-message__contact-item'}>
            <span>From</span>
            <span>{from}</span>
        </div> :
        <div className={'full-message__contact-item'}>
            <span>To</span>
            <span>{to}</span>
        </div>;

    return (
        <div>
            <div
                className={`message ${statusRead ? 'message_red' : 'message_unred'}`}
                hidden={expanded}
            >
                <div className={'message__wrp'}>
                    <div className={'wrap-text'} onClick={messageClick} role={'button'} tabIndex={0}>
                        <div className="short-subject">{subject.length > 0 ? textTrim(subject, 20) : subject}</div>
                        <div className="short-text">{textTrim(messageBody, 127)}</div>
                    </div>
                    <div className="group-button">
                        {collectionButton.map(item => {
                            return (
                                <StatrusButton
                                    key={item}
                                    messageId={id}
                                    location={location}
                                    prevState={prevState}
                                    statusButton={item}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            <div
                className={`full-message ${!expanded ? 'full-message__open' : 'full-message__closet'}`}
                hidden={!expanded}
            >

                <div className={'full-message__title'}>
                    <div className="wrap-text" onClick={messageClick} role={'button'} tabIndex={0}>
                        {subject}
                    </div>
                    <div className="group-button">
                        {collectionButton.map(item => (
                            <StatrusButton
                                key={item}
                                messageId={id}
                                location={location}
                                prevState={prevState}
                                statusButton={item}
                            />))}
                    </div>
                </div>

                <div className={'full-message__contact'}>
                    {choseVariation}
                </div>

                <div className={'full-message__text'}>
                    {messageBody}
                </div>

            </div>
        </div>
    );

};

Message.propTypes = {
    from: PropTypes.string,
    to: PropTypes.string,
    subject: PropTypes.string,
    messageBody: PropTypes.string.isRequired,
    statusRead: PropTypes.bool.isRequired,
    expanded: PropTypes.bool.isRequired,
    onClickMessage: PropTypes.func,
    changeStatus: PropTypes.func
};

Message.defaultProps = {
    subject: 'Unsubject',
    changeStatus: () => undefined
};

export default Message;
