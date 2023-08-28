import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PublicRoutes } from '../../../Models/routes';

function Li() {
    return (
        <li>
            <Link to={PublicRoutes.LOGIN}> <FaUserCircle /> Login </Link>
        </li>
    );
}

export default Li;