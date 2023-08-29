import React, { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarProducto, consultarProductosPorTienda } from '../Services/productService';
import { alertError, alertSucces } from '../Utilities';
import { cambiarPerfil, cambiarPortada } from '../Services/tiendaService';
import { createUser } from '../Redux/userSlice';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

function ProductosProvider({ children }) {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const [modalPerfil, setModalPerfil] = useState(false);
    const [modalPortada, setModalPortada] = useState(false);
    const [listaProductos, setListaProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

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

    const addProduct = async (producto) => {
        try {
            const formData = new FormData();

            formData.append('tienda_id', user.id);
            formData.append('nombre', producto.nombre);
            formData.append('codigo', producto.codigo);
            formData.append('precio', producto.precio);
            formData.append('cantidad', producto.cantidad);
            formData.append('imagen', producto.imagen);

            const data = await agregarProducto(formData);
            if (data) {
                closeModal();
                await getProductosPorTienda();
                alertSucces("Producto creado correctamente");
            }
        } catch (error) {
            console.log(producto);
            alertError("Algo salio mal");
        }
    };

    const getProductosPorTienda = async () => {
        try {
            setLoading(true);
            const data = await consultarProductosPorTienda(user.id);
            setLoading(false);
            setListaProductos(data);
        } catch (error) {
            setLoading(false);
            alertError("Algo salio mal");
        }
    };

    useEffect(() => {
        getProductosPorTienda();
    }, []);

    const cambiarImagenPerfil = async (imagen) => {
        try {
            const formData = new FormData();
            formData.append('perfil', imagen);
            const data = await cambiarPerfil(formData, user.id);
            if (data) {
                closeModalPerfil();
                dispatch(createUser(data.data));
                alertSucces(data.message);
            }
        } catch (error) {
            alertError(error.message);
        }
    };

    const cambiarImagenPortada = async (imagen) => {
        try {
            const formData = new FormData();
            formData.append('portada', imagen);
            const data = await cambiarPortada(formData, user.id);
            if (data) {
                closeModalPortada();
                dispatch(createUser(data.data));
                alertSucces(data.message);
            }
        } catch (error) {
            alertError(error.message);
        }
    };

    const providerValue = {
        user,
        loading,
        listaProductos,
        modalIsOpen,
        modalPerfil,
        modalPortada,
        addProduct,
        getProductosPorTienda,
        cambiarImagenPerfil,
        cambiarImagenPortada,
        openModal,
        openModalPerfil,
        openModalPortada,
        closeModal,
        closeModalPerfil,
        closeModalPortada,
    }

    return (
        <ProductContext.Provider value={providerValue}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductosProvider;