import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import listData from './../../list-data';
import MessageGroup from './../../message-group';
import LoadSpinner from './../../load-spiner';
import {convertToNiceDate, formatDate} from './../helpers/convert-date';
import {openMessage, closeMessage} from './services/actions';

class MessageList extends Component {

    openMessage = id => {
        if (this.props.activeMessage === id) {
            this.props.closeMessage();
        } else {
            this.props.openMessage(id);
        }
    };

    transform(value) {
        const dif = Math.floor(((Date.now() - Date.parse(value)) / 1000) / 86400);
        if (dif < 2) {
            return convertToNiceDate(value);
        } else {
            value = formatDate(value);
            return value;
        }
    }

    render() {

        const {showLoader, data, handlerStatus, activeMessage} = this.props;

        if (showLoader) {
            return <LoadSpinner/>;
        }

        if (!data || data.length === 0) {
            return 'Messages not found';
        }

        const sortData = [...data].sort((a, b) => new Date(b.date.seconds) - new Date(a.date.seconds));

        const groups = sortData.reduce((prev, item) => {
            const dateItem = item.date.toDate();
            const date = this.transform(dateItem);
            
            if (!prev[date]) {
                prev[date] = [];
            }
            prev[date].push(item);
            return prev;
        }, {});
        

        const groupArrays = Object.keys(groups).map(date => {
            return {
                date,
                dataMess: groups[date]
            };
        });

        return (
            groupArrays.map(({date, dataMess}) => (
                <MessageGroup
                    key={date}
                    date={date}
                    data={dataMess}
                    clickMessages={this.openMessage}
                    expandedId={activeMessage}
                    handlerStatus={handlerStatus}
                />))
        );
    }
}

const mapStateToProps = state => ({
    activeMessage: state.messageStatus.activeMessageId
});

MessageList.propTypes = {
    showLoader: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.object),
    handlerStatus: PropTypes.func
};

export default listData(connect(mapStateToProps, {openMessage, closeMessage})(MessageList));
