import React from 'react';
import { useState, useEffect } from 'react';
import s from './Content.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { editContent } from '../store/sliceContent';

const EditContent = () => {
    let contentForEditText = useSelector(state => state.blocnot.editContent);
    const dispatch = useDispatch();
    let [stateContent, setStateContent] = useState(contentForEditText.text);

    useEffect(() => setStateContent(contentForEditText.text), [contentForEditText.text]);

    const setText = (content) => {
        dispatch(editContent({
            id: contentForEditText.id,
            text: content
        }));
    }

    const setNewText = () => { // сохранить редактированный текст
        setText(stateContent);
    }

    const setOldText = () => {  // игнор редактированный текст , сохранить оригинал
        setText(contentForEditText.text);
    }

    return (
        <div>
            <h2 > Редактирование </h2>
            <div className={s.text}>
                <textarea value={stateContent} onChange={(e) => setStateContent(e.target.value)} />
            </div>
            <div className={s.text}>
                <button onClick={setNewText}> Сохранить </button>
                <button onClick={setOldText}> Отмена </button>
            </div>
        </div>
    )
}

export default EditContent;