import React, { Component } from 'react'

export default class ToDo extends Component {
    constructor(props){
        super(props);
        this.state= {
            isEditing:false,
            task: this.props.task
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.toogleForm=this.toogleForm.bind(this)
        this.handleChange=this.handleChange.bind(this)    
         this.handleUpdate=this.handleUpdate.bind(this)    
    }

 
handleDelete() {
    this.props.deleteTask(this.props.id)
}
toogleForm() {
 this.setState({
     isEditing: !this.state.isEditing
 })
}

handleChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleUpdate(e){
    e.preventDefault()
    this.toogleForm();
    this.props.updateTask(this.state.task,this.props.id)
}
    render() {
        let result;
        if (this.state.isEditing) {
            result = (
            <div>
                <form onSubmit={this.handleUpdate}>
                    <input
                    type='text'
                    onChange={this.handleChange}
                    value={this.state.task}
                    name="task"
                    ></input>
                    <button>Submit</button>
                </form>
            </div>
            )
        } else {
            result= (
            <div>
            <button onClick={this.toogleForm}>Edit</button>
            <button onClick={this.handleDelete}>X</button>
            <li>{this.props.task}</li>
            </div>
            )
        }
        return (
            result
        )
    }
}
