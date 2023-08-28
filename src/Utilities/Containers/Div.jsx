import React from 'react';

function Div(props) {
    return (
        <div className={props.clase}>
            {props.children}
        </div>
    );
}

export default Div;