import React, {Component} from 'react';
import './new-task.css';

export default class NewTask extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            inputField: ''
        }
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        //передаем данные родителю через функцию
        this.props.addNewTask(this.state.inputField); 
        this.setState( {
            inputField: ''
        } );

    }

    onInputTask = (e) => {
        this.setState({
            inputField: e.target.value
        });
    }

    render(){        

        return(
            <form className="form-inline" onSubmit={this.onSubmitForm}>
                <fieldset>
                    <div className="form-group">
                        <input className="form-control"
                        onChange={this.onInputTask} 
                        value={this.state.inputField}/>&nbsp;
                        <button type="submit" className="btn btn-primary">
                            Add 
                            &nbsp;<i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                    </div>                
                </fieldset>            
            </form>
        );
    }
}

