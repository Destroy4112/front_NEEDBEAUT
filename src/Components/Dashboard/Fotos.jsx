import React from 'react';
import imagenes from '../../Assets/Images/imagenes';

function Fotos() {
    return (
        <div className="list-fotos">
            <img src={imagenes.articulos} alt="" />
            <img src={imagenes.ropa} alt="" />
            <img src={imagenes.accesorios} alt="" />
            <img src={imagenes.cuidado_facial} alt="" />
        </div>
    );
}

export default Fotos;