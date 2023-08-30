import React from 'react';
import imagenes from '../../Assets/Images/imagenes';
import { RouteBack } from '../../Models';

function PortadaTienda({user}) {
    const imagenLocal = imagenes.portada;
    const imagenServer = RouteBack + user.portada;
    const imagen = user.portada;

    return (
        <div className="portada">
            <img src={imagen ? imagenServer : imagenLocal} alt="portada" />            
        </div>
    );
}

export default PortadaTienda;