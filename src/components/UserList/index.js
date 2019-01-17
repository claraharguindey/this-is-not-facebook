import React, { Component } from 'react';
import UserCard from '../UserCard'

class UserList extends Component {

    render() {
        const users = this.props.users;
        return (
            <ul>
             {users.map((user, i) => 
             <UserCard user={user} index={i} />
                  )}
            </ul>
        );
    }
}

export default UserList;