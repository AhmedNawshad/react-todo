import React from 'react';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


library.add(faTrash);

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
         items:[],
         currentItem:{
           text:'',
           key:''
       }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      const newItems=[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }
  deleteItem(key){
    const filteredItems = this.state.items.filter(item =>
      item.key!==key);
      this.setState({
        items:filteredItems
      })
  }
  setUpdate(text, key){
    const items = this.state.items;
    items.map(item =>{
      if(item.key===key){
        item.text=text;
      }
    })
    this.setState({
      items: items
    })
  }
  render(){
    return (
      <div class="page-content page-container" id="page-content">
      <div class="padding">
          <div class="row container d-flex justify-content-center">
              <div class="col-lg-18">
                  <div class="card px-3">
                      <div class="card-body">
      <header>
        <h1>Todo List</h1>
        <form id="to-do-form" class="form-inline col-sm-offset-3" onSubmit={this.addItem}>
          <input type="text" class="form-control" placeholder="Enter Text"
          value={this.state.currentItem.text} 
          onChange={this.handleInput}/>
          <button type="submit" class="btn btn-info">Add</button>
        </form>
        </header>
        <div >
          
        <ListItems items = {this.state.items}
        deleteItem ={this.deleteItem}
        setUpdate ={this.setUpdate}></ListItems>
        
            </div>
            </div>
           </div>
          </div>
         </div>
        </div>
      </div>
    )
  }
}
export default App;
