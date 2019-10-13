import React, { Component } from 'react';
import io from 'socket.io-client';
import './App.css'

class App extends Component {
  // initialize our state
  state = {
    data: [],
    id: 0,
    message: ""
  };

  sendmessage(){
    var socket = io.connect('http://localhost:3005')
    socket.emit('new_message', {message :""})
  }

  render() {
    return (
      <div>
        <div className="titlehead">chat art</div>
        <div className="user" contentEditable="true">user1</div>
        {this.state.data.length >= 1 ? <div className="chatbox"></div> : <div className="chatbox">empty</div>}
        <div className="chatinput" contentEditable="true"></div>
        <div className="chatsend" onClick={() =>
          this.sendmessage(this.state.idToUpdate, this.state.updateToApply)
        }>send</div>
      </div>
    );
  }
}

export default App;