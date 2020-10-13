import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import ItemList from '../component/ItemList';

const MyToDoList = () => {
  const todolist = useSelector(state => state.root2.list);
  const dispatch = useDispatch();

  const [inputTodo,setInputTodo] =  useState('');

  const handleInput = (e)=>{
    setInputTodo(e.target.value);
  }

  const addNewTodo = ()=>{
    if(inputTodo.trim().length>=1)
    {   
        let newTodoObject={
            id: Math.floor(Math.random()*1000001),
            content:inputTodo
        }
        dispatch({type:'ADD',payload:newTodoObject});
        setInputTodo('');
    }
    else{
        alert('Write something!');
    }
  }
    return (    
        <section id="section-todo">

        <h3 className="center-align white-text black">My To Do List</h3>
        {
            todolist.length>0?
            (<ul className="collection">
            {
              todolist.map(item => {
                return <ItemList key={item.id} item={item} />
              })
            }
          </ul>):
          (<p className="center-align">You don't have anything to do!</p>)
        }
       
        <div className="row">

        <div className="input-field col s10">
        <input onChange={handleInput} value={inputTodo} placeholder="Add to do..." id="todo-input" type="text" />
        </div>
        
        <button id="btn-todo-add" className="btn col s2 green" onClick={addNewTodo}>ADD</button>

        </div>

      </section>
      );
}

export default MyToDoList;