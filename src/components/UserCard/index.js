import React, { Component } from 'react';

class UserCard extends Component {
    render() { 
        const {index, user} = this.props;  
        console.log(user);
        return (  
            <li key={index}>
            <img src={user.picture.medium} alt={user.name.first}></img>
            <h2>{user.name.first} {user.name.last}</h2>
            <h3>{user.location.city}</h3>
            <h3>{user.dob.age}</h3>
            </li>
        );
    }
}
 
export default UserCard;