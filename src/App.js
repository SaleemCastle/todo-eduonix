import React from 'react';
import './App.css';
import MyToDos from './todos';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);


class App extends React.Component{
  constructor(){
    super();
    this.state={
      items: [],
      currentItem:{
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text != ""){
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem:{
          text: '',
          key: ''
        }
      })
    }
  }
  deleteItem(key){
    const filteredItems = this.state.items.filter(item => item.key!==key);
    this.setState({
      items: filteredItems
    })
  }
  render(){
    return(
      <div className="App">
        <header>
          <form id="to-do-form">
            <input type="text" placeholder="Enter text" value={this.state.currentItem.text} onChange={this.handleInput}/>
            <button type="submit" onClick={this.addItem}>Add</button>  
          </form>
        </header>
        <MyToDos items= {this.state.items} deleteToDo = {this.deleteItem}></MyToDos>
      </div>
    )
  }
}

export default App;
