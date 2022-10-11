import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from "axios";
import UserList from "./components/user";
import {Footer} from "./components/footer";
import {Menu} from "./components/menu";
import {BrowserRouter, Route, Routes, Link, Navigate} from "react-router-dom";

import ProjectList from "./components/project";
import TodoList from "./components/todo";
import NotFound404 from "./components/Notfound404";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'projects': [],
            'todos': [],
        }

    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/users/').then(response => {
            this.setState({
                    'users': response.data
                }
            )
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/projects/').then(response => {
            this.setState({
                    'projects': response.data.results
                }
            )
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/todos/').then(response => {
            this.setState({
                    'todos': response.data.results
                }
            )
        }).catch(error => console.log(error))
    }

    render() {
        return (
            <div>

                <div className="menu">
                    <Menu/>
                </div>

                <div className="table">
                    <BrowserRouter>

                        <nav>
                            <li>
                                <Link to='/users'>Users</Link>
                            </li>
                            <li>
                                <Link to='/projects'>Projects</Link>
                            </li>
                            <li>
                                <Link to='/todos'>Todo</Link>
                            </li>
                        </nav>
                        <Routes>
                            <Route exact path='/users' element={<UserList users={this.state.users}/>}/>
                            <Route exact path='/projects' element={<ProjectList projects={this.state.projects}/>}/>
                            <Route exact path='/todos' element={<TodoList todos={this.state.todos}/>}/>
                            {/*<UserList users={this.state.users}/>*/}
                            {/*<ProjectList projects={this.state.projects}/>*/}
                            {/*<TodoList todos={this.state.todos}/>*/}
                            <Route path='*' element={<NotFound404/>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>

        )
    }

}

export default App;
