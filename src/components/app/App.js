import React, {Component} from 'react';
import './App.css';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import NewTask from '../new-task';

class App extends Component{
  constructor(){
    super();
    this.ind = 100;
    this.state = {
      dataTodo : [
        this.createdataTodoItem('Wake up'),
        this.createdataTodoItem('Pray'),
        this.createdataTodoItem('Drink Coffe'),
        this.createdataTodoItem('Learn')
      ],
      search: ''
    }
  }

  createdataTodoItem = (task) => {
    return {
      id : this.ind ++,
      task : task,
      done: false,
      important: false
    }
  }

  onAddTask = (text) => {
    if (!text) return;
    let newItem = this.createdataTodoItem(text)
    this.setState ( (prevState) => {
      let newDataTodo = [...prevState.dataTodo, newItem];
      return {
        dataTodo: newDataTodo
      }
    } );    
  }

  onDelTask = (id) => {
    this.setState( (prevState) => {
      let {dataTodo} = prevState;
      let indx = dataTodo.findIndex( (item) => item.id === id );
      let newDataTodo = [...dataTodo.slice(0, indx), ...dataTodo.slice(indx+1)];
      return {
        dataTodo: newDataTodo
      }
    } )
  }

  onMakeDone = (id) => {
    this.setState( (prevState) => {
      let {dataTodo} = prevState;
      let indx = dataTodo.findIndex( (item) => item.id === id );
      dataTodo[indx].done = !dataTodo[indx].done;
      return {
        dataTodo
      }
    } );
  }

  onMakeImp = (id) => {
    this.setState( (prevState) => {
      let {dataTodo} = prevState;
      dataTodo = dataTodo.map( (item) => {
        if (item.id === id) item.important = !item.important;
        return item;  
      });      
      return {
        dataTodo
      }
    } );
  }

  onSearchTask = (str) => {
    this.setState({
      search: str
    });
  }

  //функция получает фразу для  поиска и возвращает подходящие элементы
  filterData(allItems, str){
    if(str.length === 0) return allItems;
    return allItems.filter( (item) => {
      return item.task.toLowerCase().indexOf(str.toLowerCase()) !== -1
    } );
  }

  render(){
    let {dataTodo, search} = this.state;
    let showData = this.filterData(dataTodo, search);

    return (
      <div className="jumbotron">
        <AppHeader/>
        <SearchPanel
          searchTask = {this.onSearchTask}
        />
        <TodoList 
          todos = {showData}
          delTask = {this.onDelTask}
          makeDone = {this.onMakeDone}
          makeImp = {this.onMakeImp}
        />
        <NewTask addNewTask = {this.onAddTask}/>   
      </div>
    );
  }
}

export default App;
