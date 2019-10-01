import React, {Component} from 'react';
import './App.css';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import NewTask from '../new-task';
import FilterPanel from '../filter-panel';

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
      search: '',
      filter: 'all'
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

  //получает сторку из поиска
  //записываеь эту строку в state
  onSearchTask = (str) => {
    this.setState({
      search: str
    });
  }

  //получает список всех элементов и фразу из поиска
  searchData(allItems, str){
    if(str.length === 0) return allItems;
    return allItems.filter( (item) => {
      return item.task.toLowerCase().indexOf(str.toLowerCase()) !== -1
    } );
  }

  //функция получает all || imp || done и записываем в state
  onFilterTasks = (str) => {
    this.setState({
      filter: str
    });
  }

  //функция получает все элементы списка с учетом фильтрации по строке поиска и еще один параметр для фильтрации
  //функция возвращает список элеметонов, который зависит от строки поиска и от кнопок-фильтов
  filterData = (data, filter) => {
    if(filter === 'all') return data;
    if (filter === 'act'){
      return data.filter( (item) => !item.done )
    }
    if (filter === 'done'){
      return data.filter( (item) => item.done )
    }
  }

  render(){
    let {dataTodo, search, filter} = this.state;
    let showData = this.filterData(this.searchData(dataTodo, search), filter);
    
    let totalT = dataTodo.length;
    let doneT = dataTodo.reduce( (sum, item) => {
      if (item.done) sum ++;
      return sum;
    },0 );
    let importT = dataTodo.reduce( (sum, item) => {
      if (item.important) sum ++;
      return sum;
    },0 );

    return (
      <div className="jumbotron">
        <AppHeader
          imp = {importT}
          done = {doneT} 
          total = {totalT - doneT}/>
        <div className='container-fluid'>
          <div className="row">
            <div class="col-lg-6">
              <SearchPanel
                searchTask = {this.onSearchTask}
              />
            </div>
            <div class="col-lg-6">
              <FilterPanel
                filterTasks = {this.onFilterTasks}
                filterStatus = {this.state.filter} 
              />
            </div>
          </div>
        </div>
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
