import React, { Component } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendForm extends Component {
    state = {
        id: '',
        name: '',
        age: '',
        email: ''
    };
    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleAddFriend = _ => {
        const { name, age, email } = this.state;
        this.createFriend({ name, age, email });
        this.setState({ name: '', age: '', email: '' });
    };
    createFriend = friend => {
        const newFriend = axiosWithAuth()
            .post("http://localhost:5000/api/friends", {
                id: friend.id,
                name: friend.name,
                age: friend.age,
                email: friend.email,
            })
            .then(function (res) {
                console.log(res);
            })
    }
    render() {
        return (
            <form >
                <input
                    value={this.state.name}
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={this.handleInputChange}
                />
                <input
                    value={this.state.age}
                    name="age"
                    type="text"
                    placeholder="Age"
                    onChange={this.handleInputChange}
                />
                <input
                    value={this.state.email}
                    name="email"
                    type="text"
                    placeholder="Email"
                    onChange={this.handleInputChange}
                />
                <button onClick={() => this.handleAddFriend()} type="button">
                    Add New Friend
          </button>
            </form>
        );
    }

};
export default FriendForm;