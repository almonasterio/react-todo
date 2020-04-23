import React, { Component } from 'react'
import uuid from 'uuid/v4'

export default class ToDoForm extends Component {
constructor(props) {
    super(props);
    this.state = {task: ""};
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
}
handleChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
}
handleSubmit(e) {
    e.preventDefault();
    this.props.createToDo({...this.state, id: uuid()});
    this.setState({task: ""})
    
}

handleDelete

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='task'>New Task</label>
                <input 
                type='task' 
                id='task' 
                placeholder="new task" 
                name='task'
                value={this.state.task} 
                onChange={this.handleChange}></input>
                <button>Add Task</button>
            </form>
        )
    }
}
