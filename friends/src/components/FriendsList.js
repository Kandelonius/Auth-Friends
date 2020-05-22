import React, { Component } from 'react';
// import Loader from 'react-loader-spinner';
import { axiosWithAuth } from "../utils/axiosWithAuth";


class FriendsList extends Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then(res => {
                console.log('friends ', res.data);
                // res.data.data
                this.setState({
                    friends: [...res.data]
                });
            })
            .catch(err => console.log(err.response));
    };

    formatData = () => {
        const formattedData = [];
        console.log("inFR", this.state.friends);
        this.state.friends.forEach(friend => {
            formattedData.push({
                name: friend.name,
                age: friend.age,
                email: friend.email,

            });
        });
        return formattedData;
    };


    render() {
        const friends = this.formatData();
        return (
            <div>
                <h1>Friends</h1>
                {friends.length > 0 && (
                    <div>
                        {friends.map(fr => (
                            <div className="friends">
                                <p>name: {fr.name}</p>
                                <p>age: {fr.age}</p>
                                <p>email: {fr.email}</p>
                            </div>
                        ))}
                    </div>
                )}
                {/* <FriendForm /> */}
            </div>
        )
    }
}

export default FriendsList;