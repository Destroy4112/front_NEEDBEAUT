import React, { createContext, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cambiarPerfil, cambiarPortada } from '../Services/tiendaService';
import { alertError, alertSucces } from '../Utilities';
import { createUser } from '../Redux/userSlice';

const TiendasContext = createContext();

export const useProductContext = () => useContext(TiendasContext);

function TiendaContext({children}) {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
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

    const cambiarImagenPerfil = async (imagen) => {
        try {
            const formData = new FormData();
            formData.append('perfil', imagen);
            const data = await cambiarPerfil(formData, user.id);
            if (data) {
                dispatch(createUser(data.data));
                alertSucces(data.message);
            }
        } catch (error) {
            alertError("Algo salio mal");
        }
    };

    const cambiarImagenPortada = async (imagen) => {
        try {
            const formData = new FormData();
            formData.append('portada', imagen);
            const data = await cambiarPortada(formData, user.id);
            if (data) {
                dispatch(createUser(data.data));
                alertSucces(data.message);
            }
        } catch (error) {
            alertError(error.message);
        }
    };

    const providerValue = {
        cambiarImagenPerfil,
        cambiarImagenPortada,
        modalPerfil,
        modalPortada,
        openModalPerfil,
        openModalPortada,
        closeModalPerfil,
        closeModalPortada
    }

    return (
        <TiendasContext.Provider value={providerValue}>
            {children}
        </TiendasContext.Provider>
    );
}

export default TiendaContext;