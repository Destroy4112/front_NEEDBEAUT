import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useProductContext } from '../../Context/ProductosContext';

function BotonCrear() {

    const { openModal } = useProductContext();
    
    return (
        <button className="boton-crear" onClick={openModal}> <FaPlus /> Crear </button>
    );
}

export default BotonCrear;