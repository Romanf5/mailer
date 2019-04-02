import React, {Component} from 'react';
import GoogleButton from 'react-google-button';
import {connect} from 'react-redux';
import {getUser, signIn} from './../../../auth/actions';
import {withRouter} from 'react-router-dom';

import './../assets/styles/steles.styl';

class Login extends Component {
    componentDidMount() {
        this.props.getUser();

        if (this.props.authenticated) {
            this.props.history.push('/inbox');
        }
    }

    componentWillUpdate(nextProps) {
        if (nextProps.authenticated) {
            this.props.history.push('/inbox');
        }
    }

    render() {
        if (this.props.authenticated) {
            return null;
        }
        return (
            <div className={'login-wrap'}>
                <GoogleButton onClick={this.props.signIn}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    authenticated: state.auth
});

export default connect(mapStateToProps, {getUser, signIn})(withRouter(Login));
