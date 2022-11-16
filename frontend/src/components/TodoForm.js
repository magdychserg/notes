import React from "react";


class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: '', projects: []}

    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }


    handleTodoChange(event) {

        if (!event.target.selectedOptions) {
            this.setState({
                'projects': []
            })
            return;
        }
        let projects = []
        for (let i = 0; i < event.target.selectedOptions.length; i++) {
            projects.push(event.target.selectedOptions.item(i).value)
        }
        this.setState(
            {'projects': projects}
        )

    }

    handleSubmit(event) {
        this.props.createTodo(this.state.name, this.state.projects)
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

                <select name="projects" multiple
                        onChange={(event) => this.handleTodoChange(event)}>
                    {this.props.projects.map((item) => <option
                        value={item.id}>{item.name}</option>)}
                </select>


                <input type="submit" value="Save"/>
            </form>
        )

    }
}

export default TodoForm