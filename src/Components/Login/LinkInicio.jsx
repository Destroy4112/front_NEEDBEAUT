import React from 'react';
import { Link } from 'react-router-dom';
import { PublicRoutes } from '../../Models';
import { FaArrowRotateLeft } from 'react-icons/fa6';

function LinkInicio(props) {
    return (
        <Link to={PublicRoutes.INICIO}>
            <FaArrowRotateLeft /> Inicio
        </Link>
    );
}

export default LinkInicio;