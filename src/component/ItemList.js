import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const ItemList = (props) => {
    const todolist = useSelector(state => state.root2.todolist);
    const dispatch = useDispatch()

    const removeItem = (id) => {
        let updateList = todolist.filter(item => item.id !== id)
        dispatch({type:'REMOVE', payload: updateList})
    }

    return (
        <li className="collection-item" key={props.item.id}>{props.item.content}
            <div
                onClick={() => {
                    removeItem(props.item.id)
                }}
                    className='secondary-content'>
                        <i className="remove-btn material-icons red-text">delete</i>
            </div>
        </li>
    )
}

export default ItemList
