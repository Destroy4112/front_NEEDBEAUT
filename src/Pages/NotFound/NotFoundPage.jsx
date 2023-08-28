import React from 'react';
import { HeaderNotFound, Svg } from '../../Components';

function NotFoundPage() {
    return (
        <>
            <HeaderNotFound />
            <div className='notfound'>
                <Svg />
                <h1>Pagina no encontrada</h1>
            </div>
        </>
    );
}

export default NotFoundPage;