import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import SearchPanel from './../search-panel';
import UserAvatar from './../user-avatar';

import './styles.styl';
import {SENT_ROUTE, SPAM_ROUTE, TRASH_ROUTE} from './../../assets/constants';

class Header extends Component {

    render() {

        let color = this.state;
        const {location} = this.props;

        switch (location.pathname) {
            case SENT_ROUTE:
                color = '#0f9d58';
                break;

            case TRASH_ROUTE:
                color = '#999';
                break;

            case SPAM_ROUTE:
                color = '#d23f31';
                break;

            default:
                color = '#2196f3';

        }

        return (
            <header className={'app-header'} style={{backgroundColor: color}} >
                <SearchPanel/>

                <UserAvatar/>
            </header>
        );
    }
}

export default withRouter(Header);
