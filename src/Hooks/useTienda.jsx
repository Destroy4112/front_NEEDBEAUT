import { useState } from 'react';
import { useProductContext } from '../Context/ProductosContext';

function useTienda() {

    const { cambiarImagenPortada, cambiarImagenPerfil, addImagenDestacada } = useProductContext();
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

    const handlesubmitdestacada = async (e) => {
        e.preventDefault();
        addImagenDestacada(imagen);
    };

    return {
        handlechange,
        handlesubmitperfil,
        handlesubmitportada,
        handlesubmitdestacada
    };
}

export default useTienda;