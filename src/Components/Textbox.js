import React from 'react';

const Textbox = props => {
    return (
        <div className="Textbox">
            <div className="cont">
                <span className="sender">{props.sender}</span>
                <br/>
                <img alt="gif" src={props.src} width="100%" className="gif"/>
            </div>
        </div>
    );
}

export default Textbox;