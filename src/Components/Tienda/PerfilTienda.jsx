import React from 'react';
import imagenes from '../../Assets/Images/imagenes';
import { RouteBack } from '../../Models';

function PerfilTienda({ user }) {

    const imagenLocal = imagenes.perfil;
    const imagenServer = RouteBack + user.perfil;
    const imagen = user.perfil;
    const nombre = user.negocio;

    return (
        <div className="perfil">
            <img src={imagen ? imagenServer : imagenLocal} alt="perfil" />
            <h2 className="nombre-perfil"> {nombre} </h2>
        </div>
    );
}

export default PerfilTienda;