import React, { Component } from 'react';
import Textbox from '../Textbox';
import TextboxMine from '../TextBoxMine';

class Chats extends Component {
    render() {
        return (
            <div className="Chats" id="chats">
                {this.props.sentGifs.map((m, index) => {
                    if (m.sender === 'Me') {
                        return <TextboxMine key={index} sender={m.sender} src={m.src}/>
                    }else {
                        return <Textbox key={index} sender={m.sender} src={m.src}/>
                    }
                })}
                
            </div>  
        );
    }
}

export default Chats;