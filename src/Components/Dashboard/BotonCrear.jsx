import React from 'react';
import { FaPlus } from 'react-icons/fa';

function BotonCrear({ openModal }) {
    return (
        <button className="boton-crear" onClick={openModal}> <FaPlus /> Crear </button>
    );
}

export default BotonCrear;