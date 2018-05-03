import React from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends React.Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return (
      <li onClick={ () => this.delete(item.key)} key={item.key}>{item.text}</li>
    )
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
    // the value stored by listItems variable is an array of li elements. Notice we are setting the key attribute (Date.now()) on each element to make it easier for React to keep track of each Element.

    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
};

export default TodoItems;
