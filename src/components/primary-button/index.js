import React from 'react';
import PropTypes from 'prop-types';

const PrimaryButton = ({label, disabled}) => {

    return (
        <button
            className={'button button_primary'}
            disabled={disabled}
        >
            {label}
        </button>
    );

};

PrimaryButton.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool
};

PrimaryButton.defaultProps = {
    label: 'text',
    type: 'button'
};

export default PrimaryButton;
