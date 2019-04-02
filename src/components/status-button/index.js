import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {connect} from 'react-redux';
import {changeStatus} from './../list-data/controllers/service/actions';
import {closeMessage} from './../messages-list/controllers/services/actions';
import {faIgloo, fas, faPlane} from '@fortawesome/free-solid-svg-icons';

library.add(faIgloo, fas, faPlane);

import './assets/styles.styl';
import {library} from '@fortawesome/fontawesome-svg-core';

const StatusButton = props => {

    const {messageId, statusButton, location, prevState} = props;

    let icon = '';

    switch (statusButton) {
        case '/inbox':
            icon = 'inbox';
            break;

        case '/sent':
            icon = '/trash';
            break;

        case '/spam':
            icon = 'exclamation-circle';
            break;

        case '/trash':
            icon = 'trash';
            break;

        case '/back':
            icon = 'undo';
            break;

        case '/trash-forever':
            icon = 'trash';
            break;
    }

    const clickHandler = e => {
        e.preventDefault();
        props.changeStatus(statusButton, messageId, location, prevState);
        props.closeMessage();
    };

    return (
        <button className={'status-button'} onClick={clickHandler}>
            <FontAwesomeIcon icon={icon}/>
        </button>
    );

};

const mapStateToProps = state => ({
    activeMessage: state.messageStatus.activeMessageId
});

StatusButton.proptypes = {
    statusButton: PropTypes.string
};

export default connect(mapStateToProps, {changeStatus, closeMessage})(StatusButton);
