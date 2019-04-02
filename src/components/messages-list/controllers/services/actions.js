import {OPEN_MESSAGE, CLOSE_MESSAGE} from './constants';

export const openMessage = id => ({
    type: OPEN_MESSAGE,
    activeId: id
});

export const closeMessage = () => ({
    type: CLOSE_MESSAGE,
    activeId: null
});
