import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onEditContent, removeContent } from './store/sliceContent';
import s from './Menu.module.css';

const Menu = () => {

    let contentArr = useSelector(state => state.blocnot.content);
    const dispatch = useDispatch();

    let menusList = contentArr.map(elem => {
        return <li key={elem.id} className={s.item}>
            <span onClick={() => dispatch(onEditContent(elem.id))}
                className={elem.searchStatus ? s.search : ''} > {elem.name}</span>
            <span className={s.delete} onClick={() => dispatch(removeContent(elem.id))} >&times;</span>
        </li>
    });

    return (
        <div>
            <h2> Мои записи</h2>
            <ol>
                {menusList}
            </ol>
        </div>
    )
}

export default Menu;