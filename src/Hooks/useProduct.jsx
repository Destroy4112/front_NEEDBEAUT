import React, { useEffect, useState } from 'react';
import { agregarProducto, consultarProductosPorTienda } from '../Services/productService';
import { alertError, alertSucces } from '../Utilities';
import { useSelector } from 'react-redux';

function useProduct() {

    const user = useSelector((state) => state.user);
    const [nombre, setNombre] = useState("");
    const [codigo, setCodigo] = useState("");
    const [precio, setPrecio] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [imagen, setImagen] = useState(null);
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleCodigoChange = (event) => {
        setCodigo(event.target.value);
    };

    const handleCantidadChange = (event) => {
        setCantidad(event.target.value);
    };

    const handlePrecioChange = (event) => {
        setPrecio(event.target.value);
    };

    const handleImagenChange = (event) => {
        const file = event.target.files[0];
        setImagen(file);
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const formData = new FormData();

            formData.append('tienda_id', user.id);
            formData.append('nombre', nombre);
            formData.append('codigo', codigo);
            formData.append('precio', precio);
            formData.append('cantidad', cantidad);
            formData.append('imagen', imagen);

            const data = await agregarProducto(formData);
            if (data) {
                alertSucces("Producto creado correctamente");
            }
        } catch (error) {
            alertError("Algo salio mal");
        }
    };

    const getProductosPorTienda = async () => {
        try {
            setProductos(await consultarProductosPorTienda(user.id));
        } catch (error) {
            alertError("Algo salio mal");
        }
    };

    useEffect(() => {
        getProductosPorTienda();
    }, []);

    return {
        cantidad,
        handleCantidadChange,
        codigo,
        handleCodigoChange,
        imagen,
        handleImagenChange,
        nombre,
        handleNombreChange,
        precio,
        handlePrecioChange,
        handleSubmit,
        productos
    };
}

export default useProduct;