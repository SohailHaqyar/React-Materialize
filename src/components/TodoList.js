import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <div className="container ">
        <div className="row">
          <ul className="collection col s12 l12">
            <h3 className="center"> Todo List</h3>
            {items.map(item => {
              return (
                <TodoItem
                  key={item.id}
                  title={item.title}
                  handleDelete={() => {
                    handleDelete(item.id);
                  }}
                  handleEdit={() => {
                    handleEdit(item.id);
                  }}
                />
              );
            })}
          </ul>
          <button
            style={{ fontFamily: "Rancho" }}
            type="button"
            className="red btn accent-3 
          waves-effect waves-light
           col s12"
            onClick={clearList}>
            Clear List
          </button>
        </div>
      </div>
    );
  }
}
