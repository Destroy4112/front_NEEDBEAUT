import React from "react";

function TituloFotos({ titulo, clase }) {
    return (
        <div className={clase}>
            <p>{titulo}</p>
        </div>
    );
}

export default TituloFotos;