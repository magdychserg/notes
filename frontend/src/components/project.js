import React from 'react'
import {Link, useParams} from "react-router-dom";


const ProjectListItem = ({project}) => {
    let link_to = `project/${project.id}`
    return (
        <tr>
            <td>{project.id}</td>
            <td>{project.name}</td>
            <td>{project.repository}</td>
            <td><Link to={link_to}>Detail</Link></td>
        </tr>
    )
}

const ProjectList = ({projects}) => {
    //console.log(users)
    return (
        <table className="table">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Repository</th>
                <th></th>
            </tr>
            {projects.map((project) => <ProjectListItem project={project} />)}
        </table>
    )
}

const ProjectUserItem = ({project}) => {
    return (
        <li>
        {project.username} ({project.email})
    </li>
    )
}

const ProjectDetail = ({getProject, project}) => {
    let { id } = useParams();
    getProject(id)
    let users = project.users ? project.users : []
    console.log(id)
    return (
        <div>
            <h1>{project.name}</h1>
            Repository: <a href={project.repository}>{project.repository}</a>
            <p></p>
            Users:
            <ol>
            {users.map((user) => <ProjectUserItem project={user} />)}
            </ol>
        </div>
    )
}

export {ProjectDetail, ProjectList}