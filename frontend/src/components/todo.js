import React from 'react'

const TodoItem = ({todo}) => {
    return (
        <tr>
            <td>
                {todo.project}
            </td>
            <td>
                {todo.user}
            </td>
            <td>
                {todo.created}
            </td>

        </tr>
    )
}
const TodoList = ({todos}) => {
    return (
        <table>
            <th>
                Project
            </th>
            <th>
                User
            </th>
            <th>
                Date created
            </th>

            {todos.map((todo) => <TodoItem todo={todo}/>)}
        </table>
    )
}
export default TodoList
