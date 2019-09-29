import React from 'react';
import './search-panel.css';

function SearchPanel( {searchTask} ){
    return(
        <input
        onChange={ (e)=> {searchTask(e.target.value)} } 
        className="form-control" 
        placeholder="search"/>
    );
}

export default SearchPanel;
