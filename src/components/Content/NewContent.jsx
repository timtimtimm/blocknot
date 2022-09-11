import React from 'react';
import { useState } from 'react';
import s from './Content.module.css';
import { useDispatch } from 'react-redux';
import { addContent } from '../store/sliceContent';

const NewContent = () => {
    let [stateContent, setStateContent] = useState('');
    const dispatch = useDispatch();

    const setText = () => {
        const name = prompt('Заглавие для меню', '----');
        dispatch(addContent({
            name,
            text: stateContent
        }));
        setStateContent('');
    }

    return (
        <div>
            <h2>Новая запись</h2>
            <div className={s.text}>
                <textarea value={stateContent} onChange={(e) => setStateContent(e.target.value)} />
            </div>
            <div className={s.text}>
                <button onClick={setText}> Сохранить</button>
            </div>
        </div>
    )
}

export default NewContent;