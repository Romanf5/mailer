import React from 'react';
import {render} from 'react-dom';
import WebFont from 'webfontloader';
import {Provider} from 'react-redux';

import 'normalize-styl/normalize.styl';
import './assets/styles/base.styl';

import App from './app';
import store from './store';

const root = document.createElement('div');
root.id = 'root';

document.body.append(root);

WebFont.load({
    google: {
        families: ['Roboto:300,400,500,700', 'Helvetica', 'Arial', 'sans-serif']
    }
});

render(<Provider store={store}>
    <App/>
</Provider>, root);
