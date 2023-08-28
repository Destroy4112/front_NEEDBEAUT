import React, { useState } from 'react';
import { FaDollarSign, FaInfoCircle } from 'react-icons/fa';
import imagenes from '../../Assets/Images/imagenes';
import { Spinner, alertError } from '../../Utilities';
import useProduct from '../../Hooks/useProduct';
import { RouteBack } from '../../Models';

function Productos() {

    const { productos } = useProduct();

    return (
        <div className="list-productos">
            {
                productos.length > 0 ?
                    productos.map((product) => (
                        <div className="card-producto" key={product.id}>
                            <div className="header-producto">
                                <img src={RouteBack + product.imagen} alt="" />
                            </div>
                            <div className="description-producto">
                                <p> <FaInfoCircle /> {product.nombre} </p>
                                <h3 className='precio'> <FaDollarSign /> {product.precio} </h3>
                            </div>
                        </div>
                    ))
                    :
                    <div className="container-spinner">
                        <Spinner />
                    </div>
            }

        </div>
    );
}

export default Productos;