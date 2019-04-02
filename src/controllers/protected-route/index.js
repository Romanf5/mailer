import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from './../../auth/actions';

export default ProtectRout => {
    class Authentication extends Component {
        componentDidMount() {
            this.props.getUser();
            if (this.props.authenticated === null) {
                this.props.history.push('/login');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.props.history.push('/login');
            }
        }

        render() {
            if (this.props.authenticated) {
                return <ProtectRout {...this.props} />;
            }
            return null;
        }
    }

    const mapStateToProps = state => ({
        authenticated: state.auth
    });

    return connect(mapStateToProps, {getUser})(withRouter(Authentication));
};
