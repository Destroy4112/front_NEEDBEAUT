import React from 'react';

function Nav(props) {
    return (
        <nav className="menu">
            {props.children}
        </nav>
    );
}

export default Nav;