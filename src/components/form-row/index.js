import PropTypes from 'prop-types';
import React from 'react';

const FormRow = ({label, placeholder, inputType, name, onChangeInput, value}) => {

    const changeInput = e => {
        onChangeInput({name, message: e.target.value});
    };

    const input = inputType !== 'textarea' ?
        <input
            type={inputType}
            id={label}
            placeholder={placeholder}
            className={'form-row__input'}
            name={name}
            value={value}
            onChange={changeInput}
            data-field-name={name}
        /> :
        <textarea
            className={'form-row__input form-row__input_textarea'}
            id={label}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={changeInput}
        />;

    return (

        <div className={'form-row'}>

            <label
                htmlFor={label}
                className={label ? 'form-row__label' : 'form-row__label form-row__label_hide'}
            >
                {label}
            </label>

            {input}

        </div>

    );
};

FormRow.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    inputType: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChangeInput: PropTypes.func
};

FormRow.defaultProps = {
    inputType: 'text'
};

export default FormRow;
