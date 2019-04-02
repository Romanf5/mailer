import React, {Component} from 'react';
import {connect} from 'react-redux';

import FormRow from '../../form-row';
import PrimaryButton from '../../primary-button';
import SecondaryButton from '../../secondary-button';
import {sendEmail} from './../../../app/controllers/services/actions';
import {reg} from './assets/constants';
import './assets/styles.styl';

class NewMessageFrom extends Component {

    closePopup = this.props.handlerEvent;

    state = {
        to: '',
        subject: '',
        message: ''
    };

    changeInput = ({name, message}) => {
        this.setState(() => {
            return {
                [name]: message
            };
        });
    };

    validateEmail = email => {
        return reg.test(String(email).toLowerCase());
    };

    submitData = e => {
        e.preventDefault();

        const currentTime = new Date();

        const currentUserData = {
            isRead: true,
            to: this.state.to,
            location: '/sent',
            message_body: this.state.message,
            subject: this.state.subject,
            message_date: currentTime,
            prevLocation: '/sent'
        };

        const toUserData = {
            isRead: false,
            from: this.props.auth.email,
            location: '/inbox',
            message_body: this.state.message,
            subject: this.state.subject,
            message_date: currentTime,
            prevLocation: '/inbox'
        };

        this.props.sendEmail(currentUserData, toUserData);

        this.setState(() => {
            return {
                to: '',
                subject: '',
                message: ''
            };
        });
    };

    render() {
        const {to, subject, message} = this.state;
        const valid = (!(this.validateEmail(to) && subject && message));

        return (

            <form className={'message-form'} onSubmit={this.submitData}>

                <div className={'message-form__header'}>

                    <div className={'message-form__title'}>
                        New Email
                    </div>

                </div>

                <div className={'message-form__body'}>
                    <div className={'message-form__headers'}>
                        <FormRow
                            label={'To'}
                            inputType={'email'}
                            placeholder={'to@email.me'}
                            name={'to'}
                            value={this.state.to}
                            onChangeInput={this.changeInput}
                        />
                    </div>

                    <div className={'message-form__content'}>
                        <FormRow
                            placeholder={'Subject'}
                            name={'subject'}
                            value={this.state.subject}
                            onChangeInput={this.changeInput}
                        />

                        <FormRow
                            placeholder={'Message Body'}
                            inputType={'textarea'}
                            name={'message'}
                            value={this.state.message}
                            onChangeInput={this.changeInput}
                        />
                    </div>

                    <div className={'message-form__controls'}>

                        <SecondaryButton
                            label={'Close'}
                            handlerEvent={this.closePopup}
                        />

                        <PrimaryButton
                            label={'Submit'}
                            type={'submit'}
                            disabled={valid}
                        />
                    </div>

                </div>


            </form>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {sendEmail})(NewMessageFrom);
