import React from 'react';
import imagenes from '../../Assets/Images/imagenes';
import { useProductContext } from '../../Context/ProductosContext';
import { Spinner } from '../../Utilities';
import { RouteBack } from '../../Models';

function Fotos() {

    const { loading, imagenesDestacadas } = useProductContext();

    return (
        <div className="list-fotos">
            {
                loading ?
                    <div className="container-spinner">
                        <Spinner />
                    </div>
                    :
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

export default Fotos;