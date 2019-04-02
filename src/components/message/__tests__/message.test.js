import React from 'react';
import {mount} from 'enzyme';
import Message from './../../message';

describe('Message', () => {
    describe('if statusRead false', () => {
        it('font weight message title bold', () => {
            const wrapper = mount(
                <Message
                    subject={'Test'}
                    from={'test@test.com'}
                    messageBody={'test'}
                    statusRead={false}
                    expanded={false}
                />);
            expect(wrapper.find('.message_red').length).toEqual(0);
        });
    });

    describe('if statusRead true', () => {
        it('font weight message title normal', () => {
            const wrapper = mount(
                <Message
                    subject={'Test'}
                    from={'test@test.com'}
                    messageBody={'test'}
                    statusRead={true}
                    expanded={false}
                />);
            expect(wrapper.find('.message_red').length).toEqual(1);
        });
    });

    describe('if expanded true', () => {
        it('message full', () => {
            const wrapper = mount(
                <Message
                    subject={'Test'}
                    from={'test@test.com'}
                    messageBody={'test'}
                    statusRead={true}
                    expanded={true}
                />);
            expect(wrapper.find('.full-message__open').length).toEqual(0);
        });
    });

    describe('if expanded false', () => {
        it('message unfull', () => {
            const wrapper = mount(
                <Message
                    subject={'Test'}
                    from={'test@test.com'}
                    messageBody={'test'}
                    statusRead={true}
                    expanded={false}
                />);
            expect(wrapper.find('.full-message__closet').length).toEqual(0);
        });
    });

});
