import React, { Component } from 'react';

class SideBar extends Component {
    state = {
        usersInRoom: []
    }
    render (){
        return (
            <div className="SideBar">
                <div className="room-info">
                    <h5>{this.props.roomName}</h5>
                    <hr/>
                    <strong>In room:</strong>
                    {this.props.users.map((u, index) => u.room === this.props.roomName ? <div key={index} className="user">{u.name}</div> : <div key={index}></div>)}
                </div>
            </div>
        );
    }
}

export default SideBar;