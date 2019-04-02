import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser, signOut} from '../../auth/actions';

import './assets/styles/styles.styl';

export class UserAvatar extends Component {

    state = {
        showMenu: false
    };

    menuHandler = () => {
        this.setState(state => {
            return {showMenu: !state.showMenu};
        });
    };

    logOut = () => {
        this.props.signOut();
    };

    render() {

        const menu = this.state.showMenu && this.props.auth ?
            <div className={'user-menu'} onClick={this.logOut} role={'button'} tabIndex={0}>
                LogOut
            </div> : null;

        const avatarBlock = this.props.auth ?
            <div className={'avatar'} onClick={this.menuHandler} role={'button'} tabIndex={0}>
                <img src={this.props.auth.photoURL} alt="Avatar"/>
            </div> : null;

        return (
            <div className={'avatar-wrp'}>
                {avatarBlock}
                {menu}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, {getUser, signOut})(UserAvatar);
