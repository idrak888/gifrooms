import React from 'react';

const Header = props => {
    return (
        <div className="Header">
            <nav className="navbar fixed-top navbar-dark">
                <a className="navbar-brand" href="/"><h4>GIFRooms</h4></a>
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="p-4">
                        <h4 className="text-white">Current room: {props.roomName}</h4>
                        <span className="text-light">(refresh to leave the room)</span>
                        <p>or</p>
                        <button onClick={props.leaveRoom} className="btn btn-danger">Leave room</button>
                        <br/>
                        <div className="info-responsive">
                            <strong>In room:</strong>
                            {props.users.map((u, index) => u.room === props.roomName ? <div key={index} className="user">{u.name}</div> : <div key={index}></div>)}
                        </div>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>
    );
}

export default Header;