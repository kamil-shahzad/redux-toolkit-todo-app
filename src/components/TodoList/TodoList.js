import React from 'react'
import { TodoItem } from '../TodoItem/TodoItem'
import { useSelector } from "react-redux"
import './todolist.css'
const TodoList = () => {
const todos = useSelector((state)=>{
  return state.tasks;
})
	return (
    <>
    <div className='container overflow-hidden todo-list'>
      {todos.map((it)=>(
        <div className='listing'>
        <TodoItem title = {it.name} id ={it.id} />
        </div>
    ))}
    </div>
    </>
	);
};
export default TodoList;

