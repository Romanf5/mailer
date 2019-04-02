import React from 'react';
import PropTypes from 'prop-types';

import './styles.styl';

const NewMessageBtn = ({click}) => {

    const handleOpenForm = () => {
        click();
    };

    return (
        <button className={'new-message'} onClick={handleOpenForm}>
            +
        </button>
    );
};

NewMessageBtn.propTypes = {
    click: PropTypes.func.isRequired
};

export default NewMessageBtn;
