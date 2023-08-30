import React from "react";
import imagenes from "../../Assets/Images/imagenes";
import { FaCamera } from "react-icons/fa";
import { RouteBack } from "../../Models";
import { useProductContext } from "../../Context/ProductosContext";

function Perfil({ userData }) {

    const { user, openModalPerfil } = useProductContext();
    const imagenLocal = imagenes.perfil;
    const imagenServer = RouteBack + user.perfil;
    const imagen = user.perfil;
    const nombre = user.negocio;

    return (
        <div className="perfil">
            <img src={imagen ? imagenServer : imagenLocal} alt="perfil" />
            <button className="change-perfil" onClick={openModalPerfil}>
                <FaCamera />
            </button>
            <h2 className="nombre-perfil"> {nombre} </h2>
        </div>
    );
}

export default Perfil;