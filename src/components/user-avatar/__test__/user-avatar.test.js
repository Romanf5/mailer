import React from 'react';
import {shallow} from 'enzyme';
import {UserAvatar} from './../../user-avatar';

describe('User avatar', () => {
    describe('if user auth', () => {
        it('show avatar', () => {
            const props = {
                auth: true
            };

            const wrapper = shallow(<UserAvatar {...props}/>);
            expect(wrapper.find('.avatar').length).toEqual(1);

        });
    });

    describe('if user unauth', () => {
        it('show avatar', () => {
            const props = {
                auth: false
            };

            const wrapper = shallow(<UserAvatar {...props}/>);
            expect(wrapper.find('.avatar').length).toEqual(0);

        });
    });
});

describe('User avatar user action', () => {
    describe('user click', () => {
        it('show menu', () => {

            const props = {
                auth: true
            };

            const wrp = shallow(<UserAvatar {...props}/>);

            wrp.find('.avatar').simulate('click');

            expect(wrp.state().showMenu).toEqual(true);
        });
    });
});
