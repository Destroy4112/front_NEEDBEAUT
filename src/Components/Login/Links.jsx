import React from 'react';
import { Link } from 'react-router-dom';
import { PublicRoutes } from '../../Models';

function Links() {
    return (
        <div className="item">
            <Link >
                <h3>¿Olvidaste tu contraseña?</h3>
            </Link>

            <Link to={PublicRoutes.REGISTER}>
                <h3>Registrate</h3>
            </Link>
        </div>
    );
}

export default Links;