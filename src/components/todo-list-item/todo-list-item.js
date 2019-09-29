import React from 'react';

import './todo-list-item.css';

function TodoListItem( {id, task, delTask, done, important, makeDone, makeImp} ){
    let taskBg = 'alert alert-dismissible alert-primary task-item';
    let taskLine = '';
    if (done) {
        taskBg += ' task-done-bg';
        taskLine += ' task-done-line';
    }
    if (important) {        
        taskLine += ' task-imp';
    }
    return(       
            <li className={taskBg}>
                <div className='task-info'>
                    <div className={taskLine}><strong>{task}</strong></div>
                    <div>
                        <button type="button"
                            onClick = {makeDone} 
                            className="btn btn-secondary">
                            <i className="fa fa-check" aria-hidden="true"></i>
                        </button>&nbsp;                       
                        <button type="button"
                            onClick = {makeImp} 
                            className="btn btn-warning">
                            <i className="fa fa-exclamation" aria-hidden="true"></i>
                        </button>&nbsp;
                        <button type="button" className="btn btn-danger" onClick={delTask}>
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </li>            
    );
}

export default TodoListItem;
