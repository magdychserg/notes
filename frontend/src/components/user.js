import React from 'react'
import {Link} from "react-router-dom";

const UserItem = ({user}) => {
    return (
        <tr>
            <td>
                <Link to={`/users/${user.username}`}>{user.username}</Link>
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.email}
            </td>
        </tr>
    )
}
const UserList = ({users}) => {
    return (
        <table>
            <th>
                User Name
            </th>
            <th>
                First name
            </th>
            <th>
                Last Name
            </th>
            <th>
                Email
            </th>
            {users.map((user_) => <UserItem user={user_}/>)}
        </table>
    )
}
export default UserList
