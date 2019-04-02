import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {connect} from 'react-redux';

import MessagesCounter from './../message-counter';

import './styles.styl';
import logo from './assets/images/Logo.png';
import logo2 from './assets/images/Logo@2x.png';

const Logo = () => (
    <img
        src={logo}
        alt="Logo"
        srcSet={`${logo2} 2x`}
    />
);

const NavigationItem = ({linkLabel, url, icon, counter}) => {
    return (
        <li className={'navigation__list-item'}>
            <NavLink
                to={url}
                className={'navigation__link'}
            >
                <span> <FontAwesomeIcon icon={icon}/> {linkLabel} </span>

                <MessagesCounter counter={counter}/>
            </NavLink>
        </li>
    );
};

NavigationItem.propTypes = {
    linkLabel: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

const Sidebar = props => {

    const counter = (item, condition) => {
        if (!item) {
            return null;
        }

        let counterItem = 0;
        item.forEach(i => {
            return i.location === condition && !i.statusRead ? counterItem++ : counterItem;
        });

        return counterItem;
    };

    const arr = [
        {
            key: 1,
            label: 'Inbox',
            url: '/inbox',
            icon: 'inbox',
            newLettersCounter: counter(props.messages.data, '/inbox')
        },
        {key: 2, label: 'Sent', url: '/sent', icon: 'paper-plane'},
        {
            key: 3,
            label: 'Spam',
            url: '/spam',
            icon: 'exclamation-circle',
            newLettersCounter: counter(props.messages.data, '/spam')
        },
        {
            key: 4,
            label: 'Trash',
            url: '/trash',
            icon: 'trash',
            newLettersCounter: counter(props.messages.data, '/trash')
        }
    ];

    return (

        <div className={'sidebar'}>

            <div className={'sidebar__header'}>
                <div className={'sidebar__logo'}>
                    <Logo/>
                </div>
            </div>

            <nav className={'navigation'}>
                <ul className={'navigation__list'}>
                    {arr.map(({label, key, url, icon, newLettersCounter}) => (
                        <NavigationItem
                            location={location}
                            linkLabel={label}
                            url={url}
                            icon={icon}
                            counter={newLettersCounter}
                            key={key}
                        />))
                    }
                </ul>
            </nav>
        </div>
    );
};


const mapStateToProps = state => ({
    messages: state.messages
});

export default connect(mapStateToProps, {})(Sidebar);
