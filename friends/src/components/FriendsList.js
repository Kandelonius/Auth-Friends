import React, { Component } from 'react';
// import moment from 'moment';
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
    // make a GET request to fetch the data
    // pass the token with the request on the Authorization request header

    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        // res.data.data
        this.setState({
        //   gasPrices: res.data.data.filter(
        //     price =>
        //       price.type === "Gasoline - Regular" &&
        //       (price.location === "US" || price.location === "State of Hawaii")
        //   )
        });

        // this.setState({
        //   gasPrices: res.data.data
        //     .filter(price => price.type === "Gasoline - Regular")
        //     .filter(
        //       price =>
        //         price.location === "US" || price.location === "State of Hawaii"
        //     )
        // });
      })
      .catch(err => console.log(err.response));
  };

//   formatData = () => {
//     const formattedData = [];
//     console.log(this.state.friends);
//     this.state.friends.forEach((name, index, arr) => {
//         formattedData.push({
//         //   date: moment(name.date).format('MMM'),
//           USname: name.name,
//           Hawaiiname: arr[index + 1].name
//         });
//     });
//     return formattedData;
//   };


    render() {
        return (
            <div>
                <h1>
                    Friends
                </h1>
            </div>
        )
    }
}

export default FriendsList;