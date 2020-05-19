import React, { Component } from 'react';
import moment from 'moment';
import Loader from 'react-loader-spinner';

class FriendsList extends Component {
    state = {
        friends: []
      };
      
  componentDidMount() {
    this.getData();
  }

  getData = () => {};

  formatData = () => {
    const formattedData = [];
    console.log(this.state.friends);
    this.state.friends.forEach((name, index, arr) => {
        formattedData.push({
        //   date: moment(name.date).format('MMM'),
          USname: name.name,
          Hawaiiname: arr[index + 1].name
        });
    });
    return formattedData;
  };


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default FriendsList;