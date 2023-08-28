import React from "react";
import { FaStar } from "react-icons/fa";

function Calificacion() {
    return (
        <div className="calificacion">
                <p className="titulo-burbuja">Calificación</p>
                <div className="stars">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    5.0
                </div>
            </div>
    );
}

export default Calificacion;