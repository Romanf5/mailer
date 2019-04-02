import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faIgloo, fas, faPlane} from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';

import Sidebar from '../../components/sidebar';
import Header from '../../components/header';
import Inbox from '../../routes/inbox';
import Sent from '../../routes/sent';
import Spam from '../../routes/spam';
import Trash from '../../routes/trash';
import Login from '../../routes/login';
import PageNotFound from '../../routes/page-not-found';
import NewMessageBtn from '../../components/new-message-btn';
import Portal from '../../components/portal';
import NewMessageForm from '../../components/new-message-form/controllers';

import './styles.styl';
import {INBOX, SENT_ROUTE, SPAM_ROUTE, TRASH_ROUTE} from './../../assets/constants';
import {openPortal, closePortal} from './services/actions';
import {getUser} from './../../auth/actions';

library.add(faIgloo, fas, faPlane);

class App extends Component {

    componentDidMount() {
        this.props.getUser();
    }

    render() {
        const {showModal, authenticated} = this.props;
        const newMessModal = showModal ? (
            <Portal>
                <div className={'modal-wrp'}>
                    <NewMessageForm handlerEvent={this.props.closePortal}/>
                </div>
            </Portal>) : null;

        const sideBar = authenticated ? <div className={'left-part'}>
            <Sidebar/>
        </div> : null;

        const newMessage = authenticated ? <NewMessageBtn click={this.props.openPortal}/> : null;

        return (
            <Router>
                <div className={'main-wrapper'}>

                    {sideBar}

                    <div className={'right-part'}>

                        <Header/>

                        <main
                            className="main-zone"
                            id={'main-zone'}
                        >
                            <Switch>
                                <Redirect exact={true} from={'/'} to={'/inbox'}/>
                                <Route exact={true} path={'/login'} component={Login}/>
                                <Route path={`${INBOX}`} component={Inbox}/>
                                <Route path={`${SENT_ROUTE}`} component={Sent}/>
                                <Route path={`${SPAM_ROUTE}`} component={Spam}/>
                                <Route path={`${TRASH_ROUTE}`} component={Trash}/>
                                <Route component={PageNotFound}/>
                            </Switch>

                            {newMessage}

                            {newMessModal}
                        </main>

                    </div>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    showModal: state.portal.showPortal,
    authenticated: state.auth
});

export default connect(mapStateToProps, {openPortal, closePortal, getUser})(App);
