import React, { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarProducto, consultarProductosPorTienda } from '../Services/productService';
import { alertError, alertSucces } from '../Utilities';
import { agregarImagenDestacada, cambiarPerfil, cambiarPortada, destacadasPorTienda } from '../Services/tiendaService';
import { createUser } from '../Redux/userSlice';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

function ProductosProvider({ children }) {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const [modalPerfil, setModalPerfil] = useState(false);
    const [modalPortada, setModalPortada] = useState(false);
    const [modalDestacadas, setModalDestacadas] = useState(false);
    const [listaProductos, setListaProductos] = useState([]);
    const [imagenesDestacadas, setImagenesDestacadas] = useState([]);
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

    const openModalDestacadas = () => {
        setModalDestacadas(true);
    };

    const closeModalDestacadas = () => {
        setModalDestacadas(false);
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

    const addImagenDestacada = async (imagen) => {
        try {
            const formData = new FormData();

            formData.append('destacadas', imagen);

            const data = await agregarImagenDestacada(formData, user.id);
            if (data) {
                closeModalDestacadas();
                alertSucces(data.message);
            }
        } catch (error) {
            console.log(error.message);
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

    const getDestacadasPorTienda = async () => {
        try {
            setLoading(true);
            const data = await destacadasPorTienda(user.id);
            setLoading(false);
            setImagenesDestacadas(data.imagenes_destacadas);
        } catch (error) {
            setLoading(false);
            alertError(error.message);
        }
    };

    useEffect(() => {
        getProductosPorTienda();
        getDestacadasPorTienda();
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
        imagenesDestacadas,
        modalIsOpen,
        modalPerfil,
        modalPortada,
        modalDestacadas,
        addProduct,
        getProductosPorTienda,
        getDestacadasPorTienda,
        cambiarImagenPerfil,
        cambiarImagenPortada,
        addImagenDestacada,
        openModal,
        openModalPerfil,
        openModalPortada,
        openModalDestacadas,
        closeModal,
        closeModalPerfil,
        closeModalPortada,
        closeModalDestacadas
    }

    return (
        <ProductContext.Provider value={providerValue}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductosProvider;