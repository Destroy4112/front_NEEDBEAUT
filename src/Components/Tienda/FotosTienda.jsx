import React from 'react';
import { RouteBack } from '../../Models';

function FotosTienda({ imagenesDestacadas }) {
    return (
        <div className="list-fotos">
            {
                imagenesDestacadas.length > 0 ?
                    imagenesDestacadas.map((product) => (
                        <img src={RouteBack + product.destacadas} alt="" key={product.id} />
                    ))
                    :
                    <div className="no-encontrado">
                        No hay ningúna foto aún
                    </div>
            }
        </div>
    );
}

export default FotosTienda;