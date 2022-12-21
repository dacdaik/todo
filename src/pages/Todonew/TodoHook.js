import React, { useRef, useState } from "react";
import "./TodoApp.css";
import TodoFooter from "./TodoFooter";
import TodoList from "./TodoList";

const TodoHook = () => {
    const [todo, setTodo] = useState(
        [{ id: 1, content: 'ăn sáng', isActive: false, isComplete: false },
        { id: 2, content: 'ăn trưa', isActive: false, isComplete: false },
        { id: 3, content: 'ăn tối', isActive: false, isComplete: true },]
    );

  return (
    <section className="todoapp">
      <div data-reactid=".0">
        <header className="header" data-reactid=".0.0">
          <h1 data-reactid=".0.0.0">todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            defaultValue=""
            data-reactid=".0.0.1"
          />
        </header>
        <TodoList todo = {todo} />
        <TodoFooter />
        
      </div>
    </section>
  );
};

export default TodoHook;
