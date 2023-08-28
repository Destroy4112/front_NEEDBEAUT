import React from 'react';

function Header({ children, clase }) {
    return (
        <header className={clase}>
            {children}
        </header>
    );
}

export default Header; 