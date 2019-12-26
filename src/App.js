import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import uuid from 'uuid'
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       items:[],
       id:uuid(),
       item:"",
       editItem:false
    }
  }

  handleChange = e => {
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id:this.state.id,
      title:this.state.item
    }
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items:updatedItems,
      item:"",
      id: uuid(),
      editItem:false
    })
  }

  clearList = () => {
    this.setState({
      items:[]
    })
  }

  handleDelete = id => {
    const filter = this.state.items.filter(item => item.id !== id);
    this.setState({
      items:filter
    })
  }

  handleEdit = id => {
    const filter = this.state.items.filter(item => item.id !== id); //
    const select = this.state.items.find(item => item.id === id)
    console.log(select);
    this.setState({
      items:filter,
      item:select.title,
      editItem:true,
      id:id
    })
  }
  render() {
    return (
      <div className="container center">
        <div className="">
          <div className="">
            <h3 className="center">Todo Input</h3>
            <TodoInput
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
            
            />
            <TodoList
            items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
