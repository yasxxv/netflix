import React from "react";

import './Header.css';

export default ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="netflix" />
                </a>
            </div>

            <div className="header--user">
                <a href="/">
                    <img src="https://ih1.redbubble.net/image.618410788.2644/flat,128x,075,f-pad,128x128,f8f8f8.u2.jpg" alt="netflix-user" />
                </a>
            </div>
        </header>
    );
}