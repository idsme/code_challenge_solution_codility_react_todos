import React, { Component } from 'react';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inputValue: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  addItem = () => {
    const { inputValue, items } = this.state;
    if (inputValue.trim() !== '') {
      const newItem = { text: inputValue, isDone: false };
      this.setState({ items: [...items, newItem], inputValue: '' });
    }
  };

  toggleItem = (index) => {
    const { items } = this.state;
    const updatedItems = [...items];
    updatedItems[index].isDone = !updatedItems[index].isDone;
    this.setState({ items: updatedItems });
  };

  render() {
    const { items, inputValue } = this.state;
    const remainingTasks = items.filter((item) => !item.isDone).length;
    const totalTasks = items.length;

    return (
      <div>
        <h2>Todo List</h2>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.addItem}>Add</button>
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              className={item.isDone ? 'is-done' : ''}
              onClick={() => this.toggleItem(index)}
            >
              {item.text}
            </li>
          ))}
        </ul>
        <p className="task-counter">
          {remainingTasks} remaining out of {totalTasks} tasks
        </p>
      </div>
    );
  }
}
