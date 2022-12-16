import React , { Component } from "react";

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <header className="header" data-reactid=".0.0">
                <h1 data-reactid=".0.0.0">todos</h1>
                <input
                className="new-todo"
                placeholder="What needs to be done?"
                data-reactid=".0.0.1"
                onChange={this.props.changeInput}
                onKeyPress = {(e) => {
                    if(e.key === "Enter") {
                        this.props.addTodo();
                    }
                }}
                />
          </header>
        )
    }
}