import React from 'react';
import { FaSignOutAlt } from "react-icons/fa";

function NavLogout({ isOpen, cerrarSesion }) {

    if (isOpen) {
        return (
            <div className="menu-logout">
                <ul>
                    <li>
                        <button onClick={cerrarSesion}>
                            <FaSignOutAlt />
                            Salir
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavLogout;