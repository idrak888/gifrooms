import React, { Component } from 'react';
import logo from '../gifrooms.png';

class Join extends Component {
    joinRoom = e => {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const room = document.querySelector('#room').value;
        
        if (name === '' || room === '') {
            document.querySelector('.text-danger').innerHTML = 'Please enter a name and a room name.';
        }else {
            
            document.querySelector('.Join').classList.add('SlideHide');
            setTimeout(() => {
                document.querySelector('.Join').style.display = 'none';
            }, 500);
            this.props.updateRoomInfo(name, room);
        }

    }
    render () {
        return (
            <div className="Join">
                <br/>
                <img src={logo} width="50"/>
                <h2>Join a room</h2>
                <form>
                    <input autoComplete="off" id="name" type="text" placeholder="Name"/>
                    <input autoComplete="off" id="room" type="text" placeholder="Room name"/>
                    <button onClick={this.joinRoom} className="btn btn-dark">Join</button>
                    <p className="text-danger"></p>
                </form>
            </div>
        );
    }
}

export default Join;