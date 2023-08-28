import React from "react";
import imagenes from "../../Assets/Images/imagenes";
import { FaCamera } from 'react-icons/fa';
import { RouteBack } from "../../Models";

function Portada({ openModal, user }) {

    const imagenLocal = imagenes.portada;
    const imagenServer = RouteBack + user.portada;
    const imagen = user.portada;

    return (
        <div className="portada">
            <img src={imagen ? imagenServer : imagenLocal} alt="portada" />
            {openModal &&
                <button className="change-portada" onClick={openModal}>
                    <FaCamera />
                    <span>Cambiar foto de portada</span>
                </button>
            }
        </div>
    );
}

export default Portada;