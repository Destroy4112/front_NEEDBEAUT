import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function BotonWhatsapp({ telefono }) {
    return (
        <Link to={"https://wa.me/57" + telefono} target='_blank' className='btn-whatsapp'> <FaWhatsapp /> </Link>
    );
}

export default BotonWhatsapp;