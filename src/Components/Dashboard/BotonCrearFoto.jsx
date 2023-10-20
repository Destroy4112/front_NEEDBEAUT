import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useProductContext } from '../../Context/ProductosContext';

function BotonCrearFoto() {

    const { openModalDestacadas } = useProductContext();

    return (
        <button className="boton-crear" onClick={openModalDestacadas}> <FaPlus /> Crear </button>
    );
}

export default BotonCrearFoto;