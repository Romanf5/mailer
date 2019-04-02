import React from 'react';

import './assets/styles.styl';

const LoadSpinner = () => {
    return (
        <div className="spinner-box">
            <div className="outer-circle">
                <div className="inner-circle"/>
            </div>
        </div>
    );
};

export default LoadSpinner;
