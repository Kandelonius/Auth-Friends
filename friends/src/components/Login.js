import React, { Component } from 'react'
import { axiosWithAuth } from "../utils/axiosWithAuth";

// create a new "instance" of the axios module that has the Auth header built-in

// export const axiosWithAuth = () => {
//   const token = localStorage.getItem("token");
//   return axios.create({
//     headers: {
//       Authorization: token
//     },
//     baseURL: "http://localhost:5000"
//   });
// };

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
        axiosWithAuth()
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then(res => {
        // res.data.payload
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

