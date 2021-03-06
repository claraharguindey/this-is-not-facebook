import React, { Component } from 'react';
import './App.css';
import UserList from './components/UserList';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
    this.newFetch = this.newFetch.bind(this);
    this.newFetch();
  }
  newFetch(){
    const uri = "https://randomuser.me/api/?results=5"
    fetch(uri)
      .then(response => response.json())
      .then(users => {
        this.setState ({
          users: users.results
        })
      })
    }
  
  render() {
    const {users} = this.state;
    return (
      <div className="App">
      <UserList users={users}/>
      </div>
    );
  }
}

export default App;
