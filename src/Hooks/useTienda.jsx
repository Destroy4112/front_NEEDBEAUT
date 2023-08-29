import { useState } from 'react';
import { useProductContext } from '../Context/ProductosContext';

function useTienda() {

    const { cambiarImagenPortada, cambiarImagenPerfil } = useProductContext();
    const [imagen, setImagen] = useState(null);

    const handlechange = (event) => {
        const file = event.target.files[0];
        setImagen(file);
    };

    const handlesubmitperfil = async (e) => {
        e.preventDefault();
        cambiarImagenPerfil(imagen);
    };

    const handlesubmitportada = async (e) => {
        e.preventDefault();
        cambiarImagenPortada(imagen);
    };

    return {
        handlechange,
        handlesubmitperfil,
        handlesubmitportada,
    };
}

export default useTienda;