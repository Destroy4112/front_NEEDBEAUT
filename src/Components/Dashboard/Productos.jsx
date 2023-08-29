import React from 'react';
import { FaDollarSign, FaInfoCircle } from 'react-icons/fa';
import { Spinner } from '../../Utilities';
import { RouteBack } from '../../Models';
import { useProductContext } from '../../Context/ProductosContext';

function Productos() {

    const { loading, listaProductos } = useProductContext();

    return (
        <div className="list-productos">
            {
                loading ?
                    <div className="container-spinner">
                        <Spinner />
                    </div>
                    :
                    listaProductos.length > 0 ?
                        listaProductos.map((product) => (
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
                        <div className="no-encontrado">
                            No hay ningún producto aún
                        </div>
            }

        </div>
    );
}

export default Productos;