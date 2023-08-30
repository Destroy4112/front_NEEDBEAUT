import React from 'react';
import { FaEnvelope, FaIdCard, FaList, FaMapMarkerAlt, FaPhoneAlt, FaUserCircle } from "react-icons/fa";

function InformacionTienda({ user }) {
    return (
        <div className="datos-negocio">
            <p className="titulo-burbuja">Información</p>
            <div className="detalle">
                <h4><FaUserCircle /> Propietario:</h4><span> {user.propietario} </span>
            </div>
            <div className="detalle">
                <h4><FaEnvelope /> Correo:</h4><span> {user.email} </span>
            </div>
            <div className="detalle">
                <h4><FaMapMarkerAlt /> Ubicación:</h4><span> {user.ubicacion} </span>
            </div>
            <div className="detalle">
                <h4><FaList /> Categorias:</h4><span> {user.categoria} </span>
            </div>
            <div className="detalle">
                <h4><FaIdCard /> NIT:</h4><span> {user.nit} </span>
            </div>
            <div className="detalle">
                <h4><FaPhoneAlt /> Telefono:</h4><span> {user.telefono} </span>
            </div>
        </div>
    );
}

export default InformacionTienda;