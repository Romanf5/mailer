import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {loadMessages, updateMessages} from './service/actions';

export default View => {

    class ListData extends Component {

        unsubscribe = null;

        componentDidMount() {
            this.unsubscribe = this.props.loadMessages();
        }

        componentWillUnmount() {
            this.unsubscribe && this.unsubscribe();
        }

        render() {
            const {showLoader, data} = this.props.messages;

            const sortData = data ? data.filter(message => message.location === location.pathname) : [];

            return (
                <View
                    data={sortData}
                    showLoader={showLoader}
                    handlerStatus={this.props.updateMessages}
                />);
        }

    }

    const mapStateToProps = state => ({
        auth: state.auth,
        messages: state.messages
    });

    return connect(mapStateToProps, {loadMessages, updateMessages})(withRouter(ListData));
};
