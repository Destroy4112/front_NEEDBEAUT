import React from 'react';
import imagenes from '../../Assets/Images/imagenes';
import { Spinner } from '../../Utilities';
import { Link } from 'react-router-dom';
import { PublicRoutes, RouteBack } from '../../Models';

function Tiendas({ tiendas, loading }) {

    const imagenLocal = imagenes.perfil;

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
                                <img src={tienda.perfil ? RouteBack + tienda.perfil : imagenLocal} className="image-tienda" alt="" />
                                <div className="content-tienda">
                                    <h3>{tienda.negocio}</h3>
                                    <span>accesorios lindo para ti</span>
                                </div>
                            </Link>
                        ))) :
                        (<div className="no-encontrado"> No se ha creado ninguna tienda con esta categoría </div>)
            }
        </>
    );
}

export default Tiendas;