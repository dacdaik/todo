import React from 'react'

export default function TodoList(todo) {
    console.log(typeof todo, todo.length);
    // todo.filter((item)=>{
    //     console.log(item);
    // })
  return (
    <section className="main" data-reactid=".0.1">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
           data-reactid=".0.1.0"
        />
        <label htmlFor="toggle-all" data-reactid=".0.1.1" />
        <ul className="todo-list" data-reactid=".0.1.2">
            
        </ul>
    </section>
  )
}
