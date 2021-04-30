import React from 'react';
import avatar from '../avatar.png';

const Footer = props => {
    const sendGifInit = (index, e) => {
        e.preventDefault();
        props.sendGif(document.querySelectorAll('.gifs')[index].src);
    }
    return (
        <div className="Footer">
            <footer className="navbar fixed-bottom">
                <div className="info">
                    {props.name} <img alt="Avatar icon" src={avatar} className="avatar"/>
                </div>
                <div className="chat-bar">
                    <p>
                        <button className="btn btn-dark" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
                            GIFS<img src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_white_192x192.png"/>
                        </button>
                    </p> 
                    <div className="row">
                        <div className="col">
                            <div className="collapse multi-collapse" id="multiCollapseExample2">
                                <div className="bg-dark card card-body">
                                    <h2>Browse GIFS</h2>
                                    <form onSubmit={props.search}>
                                        <input autoComplete="off" id="search" type="text" placeholder="Search"/>    
                                    </form>
                                    <div className="gifs-holder">
                                        {props.gifs.map((g, index) => {
                                            return (
                                                <div key={index}>
                                                    <img alt="Gif" src={g} className="gifs"/>
                                                    <div className="gif-overlay"></div>
                                                    <a className="send" href="/" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2" onClick={(e) => sendGifInit(index, e)}>send</a>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;