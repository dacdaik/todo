import axios from "axios";
import React, { useEffect , useState } from "react";
import "./TodoApp.css";
import TodoFooter from "./TodoFooter";
import TodoList from "./TodoList";

const TodoHook = () => {
    const [todo, setTodo] = useState([]);
    const fetchListTodo = async () => {
      const {data} = await axios.get("https://63a44e2a821953d4f2b0637d.mockapi.io/app");
      setTodo(data);
    }
    useEffect(()=>{
      fetchListTodo()
    },[])

    const changInput = event => {
      const addName=(
        {content: event.target.value, isComplete: 'false', isActive: 'false'});
        // setTodo(addName);
      // console.log(event.target.value);
      console.log(addName);
    }
  
    const handleSubmit = event => {
      event.preventDefault();
      console.log(todo);
  
      const user = {};
    }
  return (
    <section className="todoapp">
      <div data-reactid=".0" >
        <header className="header" data-reactid=".0.0">
          <h1 data-reactid=".0.0.0">todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            defaultValue=""
            data-reactid=".0.0.1"
            onChange = {changInput}
            onKeyPress = {(e) => {
              if(e.key === "Enter") {
                  console.log("Cao Ba Dac");;
              }
          }}
          />
        </header>
        <TodoList todo = {todo} />
        <TodoFooter />
      </div>
    </section>
  );
};

export default TodoHook;
