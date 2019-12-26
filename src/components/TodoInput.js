import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange , handleSubmit , editItem } = this.props
    return (
      <div className="collection" style={{ fontFamily: "Satisfy"}}>
        <div className="row">
          <form className="col s12 l12" onSubmit={handleSubmit} style={{ fontFamily: "Satisfy"}}>
            <div className="input-field col s12" style={{ fontFamily: "Satisfy"}}>
              <input
              style={{ fontFamily: 'Rancho', fontSize: "25px"}}
               id="icon_prefix" 
               type="text" 
               className="validate" 
               value={item}
               onChange={handleChange}
               />
              <button 
              style={{ fontFamily: "Rancho" }}
              className={
                editItem
                 ? "btn green accent-3 large col s12 pulse"
                 : "btn blue accent-4 large col s12"
              }>
                {editItem ? "Edit the Todo" : "Add a Todo"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
