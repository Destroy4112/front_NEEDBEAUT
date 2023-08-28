import React from 'react';

function H2({ children, clase }) {
    return (
        <h2 className={clase}>
            {children}
        </h2>
    );
}

export default H2;