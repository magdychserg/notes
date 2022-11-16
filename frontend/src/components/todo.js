import React from 'react'
import {Link} from "react-router-dom";


const ToDoListItem = ({todo, deleteTodo}) => {
    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.text}</td>
            <td>{todo.create}</td>
            <td>{todo.project}</td>
            <td>{todo.creator}</td>
            <td><button onClick={()=> deleteTodo(todo.id)} type="button">Delete</button></td>
        </tr>
    )
}

const ToDoList = ({todos, deleteTodo}) => {
    //console.log(users)
    return (
        <table className="table">
            <tr>
                <th>Id</th>
                <th>Text</th>
                <th>Create</th>
                <th>Project</th>
                <th>Creator</th>
            </tr>
            {todos.map((todo) => <ToDoListItem todo={todo} Todo={deleteTodo} />)}
             <Link to='/todos/create'>Create</Link>
        </table>
    )
}

export default ToDoList