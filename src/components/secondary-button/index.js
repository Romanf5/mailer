import React from 'react';
import PropTypes from 'prop-types';

const SecondaryButton = ({label, handlerEvent, type}) => {

    return (
        <button
            type={type}
            className={'button button_secondary'}
            onClick={handlerEvent}
        >
            {label}
        </button>
    );

};

SecondaryButton.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    handlerEvent: PropTypes.func
};

SecondaryButton.defaultProps = {
    label: 'text',
    type: 'button',
    handlerEvent: () => undefined
};

export default SecondaryButton;
