import React, { useEffect, useState } from 'react';
import { alertError, alertSucces } from '../Utilities';
import { cambiarPerfil, cambiarPortada } from '../Services/tiendaService';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../Redux/userSlice';

function useTienda() {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [imagen, setImagen] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false);
    }, [])

    const handlechange = (event) => {
        const file = event.target.files[0];
        setImagen(file);
    };

    const handlesubmit = async (e) => {
        try {
            e.preventDefault();
            const formData = new FormData();
            formData.append('perfil', imagen);
            const data = await cambiarPerfil(formData, user.id);
            if (data) {
                dispatch(createUser(data.data));
                setOpen(true);
                alertSucces(data.message);
            }
        } catch (error) {
            alertError(data.message);
        }
    };

    const handlesubmitportada = async (e) => {
        try {
            e.preventDefault();
            const formData = new FormData();
            formData.append('portada', imagen);
            const data = await cambiarPortada(formData, user.id);
            if (data) {
                dispatch(createUser(data.data));
                setOpen(true);
                alertSucces(data.message);
            }
        } catch (error) {
            alertError(data.message);
        }
    };

    return {
        handlechange,
        handlesubmit,
        handlesubmitportada,
        open
    };
}

export default useTienda;