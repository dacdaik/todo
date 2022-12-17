import React , { Component } from "react";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }
    render(){
        return(
            <section className="main" data-reactid=".0.1">
            <input
              id="toggle-all"
              className="toggle-all"
              type="checkbox"
              data-reactid=".0.1.0"
            />
            {/* <label htmlFor="toggle-all" data-reactid=".0.1.1" /> */}
            <ul className="todo-list" data-reactid=".0.1.2">
              <li
                className=""
                data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654"
              >
                <div
                  className="view"
                  data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0"
                >
                  <input
                    className="toggle"
                    type="checkbox"
                    // defaultChecked={this.props.isActive}
                    onClick={this.props.changeActive}
                    data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.0"
                  />
                  <label data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.1"
                  style={!this.props.isActive === true ? { color: "pink" } : { color: "red" }}>
                    {this.props.content}
                  </label>
                  <button
                    className="destroy"
                    data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.2"
                    onClick={this.props.delTodo}
                  />
                </div>
                <input
                  className="edit"
                  defaultValue="ăn sáng"
                  data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.1"
                />
              </li>
            </ul>
          </section>
        )
    }
}