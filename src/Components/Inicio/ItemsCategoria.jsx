import React from 'react';
import { Link } from 'react-router-dom';
import { PublicRoutes } from '../../Models/routes';

function ItemsCategoria({ categorias }) {
    return (
        <>
            {
                categorias.map((cate) => (
                    <Link to={`${PublicRoutes.CATEGORIAS}/${cate.descripcion}`} key={cate.descripcion}>
                        <li>
                            <img src={cate.imagen} className="imagen-categoria" alt={cate.descripcion} />
                            <p className="datalle-categoria">{cate.descripcion}</p>
                        </li>
                    </Link>
                ))
            }
        </>
    );
}

export default ItemsCategoria;