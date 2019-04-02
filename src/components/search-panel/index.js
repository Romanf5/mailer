import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './styles.styl';

const SearchPanel = () => {

    return (
        <label className={'search-panel'}>
            <FontAwesomeIcon icon={'search'} className={'icon icon--search'}/>
            <input type="text" className={'search-panel__input'} placeholder={'Search'}/>
            <FontAwesomeIcon icon={'microphone'} className={'icon icon--micro'}/>
        </label>
    );

};

export default SearchPanel;


