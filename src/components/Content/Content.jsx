import React from 'react';
import NewContent from './NewContent';
import EditContent from './EditContent';
import { useSelector } from 'react-redux';

const Content = () => {
const isEdit = useSelector(state => state.blocnot.isEditContent);

    return (
    <div>
        <h1 > Редактор</h1>
       {isEdit? <EditContent /> : <NewContent /> } 
    </div>
    )
}
export default Content;