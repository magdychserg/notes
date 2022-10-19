import React from 'react'


const ToDoListItem = ({todo}) => {
    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.text}</td>
            <td>{todo.create}</td>
            <td>{todo.project}</td>
            <td>{todo.creator}</td>
        </tr>
    )
}

const ToDoList = ({todos}) => {
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
            {todos.map((todo) => <ToDoListItem todo={todo} />)}
        </table>
    )
}

export default ToDoList