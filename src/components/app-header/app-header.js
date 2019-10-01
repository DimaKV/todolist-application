import React from 'react';
import './app-header.css';

function AppHeader(props){
    let {total, done, imp} = props;
    return(
       <div className="space">
            <h1>My TodoList</h1>
            <div>
                <span class="badge badge-success">Remain Tasks {total}</span>&nbsp;
                <span class="badge badge-warning">Important {imp}</span>&nbsp;
                <span class="badge badge-secondary">Done {done}</span>
            </div>             
       </div>
    );
}

export default AppHeader;
