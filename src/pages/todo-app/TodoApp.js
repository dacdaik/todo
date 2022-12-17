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
        { id: 1, content: 'ăn sáng', isActive: false, isComplete: false },
        { id: 2, content: 'ăn trưa', isActive: false, isComplete: false },
        { id: 3, content: 'ăn tối', isActive: false, isComplete: true },
      ],
      style:"",
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

  delTodo = (item) => {
    this.setState((prevState) => ({
      ...prevState,
      listTodos: this.state.listTodos.filter((it) => {
        if (it.id !== item.id) {
          return it;
        }
      }),
    }));
  }

  changeActive = () => {
    this.setState({
      isActive: !this.state.isActive,
    })
    if (!this.state.isActive === true) {
      this.setState((prevState) => ({
        ...prevState,
        style: "#red",
      }))
      console.log(this.state.style);
      ;
    } else {
      this.setState((prevState) => ({
        ...prevState,
        style: "#black",
      }))
      console.log(this.state.style);
    };
    // console.log(!this.state.isActive);
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
              delTodo = {() => this.delTodo(item)}
              changeActive = {() => this.changeActive()}
              // style= {() => this.changeActive()}
               />
            )})
          }
        
          <FillterTodo />
        </div>
      </section>
    )
  }
}
