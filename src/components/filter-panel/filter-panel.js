import React from 'react';
import './filter-panel.css';

const FilterPanel = ( {filterTasks, filterStatus} ) => {
    let btnClassAll = 'btn btn-outline-info filter-btn';
    let btnClassAct = 'btn btn-outline-info filter-btn';
    let btnClassDone = 'btn btn-outline-info filter-btn';
    switch (filterStatus){
        case 'all':  
            btnClassAll = 'btn btn-outline-secondary filter-btn';
            break;
        case 'act':
            btnClassAct = 'btn btn-outline-secondary filter-btn';
            break;

        case 'done':
            btnClassDone = 'btn btn-outline-secondary filter-btn';
            break;
                
        default: btnClassAll = 'btn btn-outline-secondary filter-btn';
    }
    return (
        <div>
            <button
                onClick={ () => filterTasks('all')}  
                className={btnClassAll}>ALL</button>
            <button 
                onClick={ () => filterTasks('act')} 
                className={btnClassAct}>Active</button>
            <button
                onClick={ () => filterTasks('done')} 
                className={btnClassDone}>Done</button>
        </div>
    )
}

export default FilterPanel;