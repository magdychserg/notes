import React from 'react'

const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>
                {project.name}
            </td>
            <td>
                {project.link}
            </td>
            <td>
                {project.user}
            </td>
        </tr>
    )
}
const ProjectList = ({projects}) => {
    return (
        <table>
            <th>
                name
            </th>
            <th>
                Link
            </th>
            <th>
                User
            </th>

            {projects.map((project_) => <ProjectItem project={project_}/>)}
        </table>
    )
}
export default ProjectList
