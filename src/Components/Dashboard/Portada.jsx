import React from "react";
import imagenes from "../../Assets/Images/imagenes";
import { FaCamera } from 'react-icons/fa';
import { RouteBack } from "../../Models";
import { useProductContext } from "../../Context/ProductosContext";

function Portada() {

    const { user, openModalPortada } = useProductContext();
    const imagenLocal = imagenes.portada;
    const imagenServer = RouteBack + user.portada;
    const imagen = user.portada;

    return (
        <div className="portada">
            <img src={imagen ? imagenServer : imagenLocal} alt="portada" />
            {openModalPortada &&
                <button className="change-portada" onClick={openModalPortada}>
                    <FaCamera />
                    <span>Cambiar foto de portada</span>
                </button>
            }
        </div>
    );
}

export default Portada;