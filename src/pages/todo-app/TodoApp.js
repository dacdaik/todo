import React, { Component } from "react";
import FillterTodo from "./FillterTodo";
import Header from "./Header";
import "./TodoApp.css";
import TodoList from "./TodoList";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodos: [
        { id: 1, content: 'ăn sáng', isActive: true, isComplete: false },
        { id: 2, content: 'ăn trưa', isActive: true, isComplete: false },
        { id: 3, content: 'ăn tối', isActive: false, isComplete: true },
      ],
      content:""
    };
  }
  changeInput = (event) => {
    console.log(event.target.value);
    this.setState((prevState) => ({
      ...prevState,
      content: event.target.value,
    }));
  };


  addTodo= () => {
    this.setState((prevState) => ({
      ...prevState,
      listTodos: [
        ...prevState.listTodos,
        {
          id: 10,
          content: prevState.content,
          isActive: false,
          isComplete: false,
        },
      ],
    }));
  }

  deleteItem = (item) => {
    this.setState((prevState) => ({
      ...prevState,
      listTodos: this.state.listTodos.filter((it) => {
        if (it.id !== item.id) {
          return it;
        }
      }),
    }));
  }

  changeActive = (item) => {
    this.setState((prevState) => ({
      ...prevState,
      listTodos: this.state.listTodos.filter((it) => {
        if (it.isActive === true) {
          console.log("true");;
        } else {
          console.log("false");
        }
      }),
    }));
  }


  render() {
    return (
      <section className="todoapp">
        <div data-reactid=".0">
          <Header
          addTodo ={this.addTodo}
          changeInput = {this.changeInput}
          />
          {this.state.listTodos.map((item) => {
            return (
              <TodoList
              content = {item.content}
              isActive = {item.isActive}
              isComplete = {item.isComplete}
              delTodo = {() => this.deleteItem(item)}
              changeActive = {() => this.changeActive}
               />
            )})
          }
        
          <FillterTodo />
        </div>
      </section>
    )
  }
}
