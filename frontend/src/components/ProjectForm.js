import React from "react";


class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: '',repository: '', users: []}

    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value,
                [event.target.repository]: event.target.value
            }
        )
    }


    handleProjectChange(event) {

        if (!event.target.selectedOptions) {
            this.setState({
                'users': []
            })
            return;
        }
        let users = []
        for(let i = 0; i < event.target.selectedOptions.length;i++){
            users.push(event.target.selectedOptions.item(i).value)
        }
        this.setState(
            {'users':users}
        )

    }

    handleSubmit(event) {
        this.props.createProject(this.state.name, this.state.users, this.state.repository)
        event.preventDefault()
    }


    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>

                <div className="form-group">
                    <label htmlFor="name"></label>
                    <input type="text" name="name" placeholder="name"
                           value={this.state.name}
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="repository"></label>
                    <input type="url" name="repository" placeholder="repository"
                           value={this.state.repository}
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <select name="users" multiple
                        onChange={(event) => this.handleProjectChange(event)}>
                    {this.props.users.map((item) => <option
                        value={item.id}>{item.username}</option>)}
                </select>


                <input type="submit" value="Save"/>
            </form>
        )

    }
}
export default ProjectForm