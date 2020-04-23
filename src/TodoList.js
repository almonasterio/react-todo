import React, { Component } from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'
import "./TodoList.css"

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
        this.create=this.create.bind(this);
        this.delete=this.delete.bind(this);
        this.updateTask=this.updateTask.bind(this);
        this.toogleCompletion=this.toogleCompletion.bind(this)
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
        const updatedToDo = [...this.state.todos.map(todo => {
            if (todo.id==id) {
               return {...todo, task: editedTask}
            } return todo; })]
        this.setState({
            todos: updatedToDo
        })

    }
toogleCompletion(id) {
 const completedToDo = [...this.state.todos.map(eTask => {
            if (eTask.id==id) {
               return {...eTask, completed:!eTask.completed}
            } return eTask; })]
        this.setState({
            todos: completedToDo
        })
}

    render() {
        console.log(this.state.todos)
        let toDos = this.state.todos
        let taskList = toDos.map(e => < li > <ToDo ToDo classNames = 'todo'
        deleteTask={this.delete} 
        key={e.id}
        id={e.id}
        toogleCompletion={this.toogleCompletion}
        completed={e.completed}
        updateTask={this.updateTask}
        task={e.task}>
        </ToDo></li>)
        return (
            <div className="TodoList">
                <h1>To Do List! Get To Work! <span>An Animated Todo List Made With React Hooks.</span></h1>
                <ul>{taskList}</ul>
                <ToDoForm className='todo-list' createToDo={this.create}></ToDoForm>

            </div>
        )
    }
}
