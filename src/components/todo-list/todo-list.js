import React from 'react';
import TodoListItem from '../todo-list-item'
import './todo-list.css';

function TodoList( {todos, delTask, makeDone, makeImp} ){

    let itemsList = todos.map( (item) => {
        return <TodoListItem 
                {...item}
                key = {item.id}
                makeDone = {() => makeDone(item.id)} 
                delTask = { () => {delTask(item.id)} }
                makeImp = { () => {makeImp(item.id)} }
                />
    } );
    return(
        <ul className="task-list">
           {itemsList}           
        </ul>
    );
}

export default TodoList;
