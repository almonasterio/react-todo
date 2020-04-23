import React, { Component } from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
        this.create=this.create.bind(this);
        this.delete=this.delete.bind(this);
        this.updateTask=this.updateTask.bind(this)
    }
    create(newToDo) {
        console.log(newToDo)
        this.setState({
            todos: [...this.state.todos, newToDo]
        })

    }
    delete(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id!==id)
        })
    }
    updateTask(editedTask, id) {
        const updatedToDo
        // this.setState({
        //     todos: [...this.state.todos.map(t => t.id==id? (return t.task=editedTask) : null )]
        // })

    }


    render() {
        console.log(this.state.todos)
        let toDos = this.state.todos
        let taskList = toDos.map(e=> <li><ToDo 
        deleteTask={this.delete} 
        key={e.id}
        id={e.id}
        updateTask={this.updateTask}
        task={e.task}>
        </ToDo></li>)
        return (
            <div>
                <h1>To Do List!</h1>
                <ul>{taskList}</ul>
                <ToDoForm createToDo={this.create}></ToDoForm>

            </div>
        )
    }
}
