import React, { Component } from 'react'
import axios from "axios";

export default class Login extends Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        // make a POST request in the login endpoint
        // if the creds match what is in the database, the server will return a JSON web token
        // set the token to localStorage (sessions)
        // navigate the user to the "/protected" route
        axios
            .post("http://localhost:5000/api/login", this.state.credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.payload);
                this.props.history.push("/protected");
            })
            .catch(err => console.log(err));
    };
    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log in</button>
                </form>
            </div>
        );
    }
}

