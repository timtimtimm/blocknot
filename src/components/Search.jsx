import React from 'react';
import s from './Searsh.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchContent } from './store/sliceContent';

const Search = () => {
    let [stateSearch, setStateSearch] = useState('');
    const dispatch = useDispatch();

    const startSearch = () => {
        dispatch(searchContent(stateSearch));
    };

    const cancelSearch = () => {
        dispatch(searchContent(''));
        setStateSearch('');
    };

    return (
        <div className={s.inputStyle}>
            <h2> Поиск</h2>
            <input value={stateSearch} onChange={(e) => setStateSearch(e.target.value)} />
            <button onClick={startSearch}> Искать</button>
            <button onClick={cancelSearch}> Сброс</button>
        </div>
    )
}

export default Search;