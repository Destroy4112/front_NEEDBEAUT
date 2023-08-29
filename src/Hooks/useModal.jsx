import { useState } from 'react';

function useModal() {

    const [modalPerfil, setModalPerfil] = useState(false);
    const [modalPortada, setModalPortada] = useState(false);    

    const openModalPerfil = () => {
        setModalPerfil(true);
    };

    const closeModalPerfil = () => {
        setModalPerfil(false);
    };

    const openModalPortada = () => {
        setModalPortada(true);
    };

    const closeModalPortada = () => {
        setModalPortada(false);
    };

    return {
        openModalPerfil,
        openModalPortada,
        closeModalPerfil,
        closeModalPortada,
        modalPerfil,
        modalPortada
    };
}

export default useModal;