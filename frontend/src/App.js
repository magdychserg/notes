import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from "axios";
import UserList from "./components/user";
import {Footer} from "./components/footer";
import {Menu} from "./components/menu";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': []
        }

    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/users/').then(response => {
            this.setState({
                    'users': response.data
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
                    <UserList users={this.state.users}/>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>

        )
    }

}

export default App;
