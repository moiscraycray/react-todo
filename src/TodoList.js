import React, { Component } from 'react';
import TodoItems from './TodoItems.js';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [] // stores all the items you can enter
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value.trim() !== "") {
      var newItem = {
        text: this._inputElement.value.trim(),
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
          // we are ensuring our state object isn't modified. We are instead giving it an entirely new array made up of both the existing items data along with the newly entered data.
        };
      });

      this._inputElement.value = "";
      // we are clearing the value of our input element to make room for the next todo item.
    };

    console.log(this.state.items);

    e.preventDefault();
    // we are overriding this event's default behaviour. By default, when you submit a form, the page reloads and clears everything out.
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="enter task">
              {/*
                ES6: ref={(a) => this._inputElement = a}
                ES5:
                function(a) {
                  return this._inputElement = a;
                };
              */}
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
};

export default TodoList;
