import React from 'react';
import imagenes from '../../Assets/Images/imagenes';
import { Spinner } from '../../Utilities';
import { Link } from 'react-router-dom';
import { PublicRoutes } from '../../Models';

function Tiendas({ tiendas, loading }) {
    return (
        <>
            {
                loading ?
                    <div className="container-spinner">
                        <Spinner />
                    </div>
                    :
                    tiendas.length > 0 ? (
                        tiendas.map((tienda) => (
                            <Link to={`${PublicRoutes.TIENDA}/${tienda.id}`} className="tienda" key={tienda.id}>
                                <img src={imagenes.peluqueria} className="image-tienda" alt="" />
                                <div className="content-tienda">
                                    <h3>{tienda.negocio}</h3>
                                    <span>accesorios lindo para ti</span>
                                </div>
                            </Link>
                        ))) :
                        (<div>No hay ninguna tienda aun.</div>)
            }
        </>
    );
}

export default Tiendas;