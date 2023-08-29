import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useProductContext } from '../Context/ProductosContext';

function useProduct() {

    const user = useSelector((state) => state.user);
    const { addProduct } = useProductContext();

    const [product, setProduct] = useState({
        tienda_id: user,
        codigo: '',
        nombre: '',
        precio: '',
        cantidad: '',
        imagen: '',
    });

    const handleChange = ({ target }) => {
        setProduct({
            ...product,
            [target.name]: target.value
        });
    };

    const handleImagenChange = (event) => {
        const file = event.target.files[0];
        setProduct({
            ...product,
            imagen: file
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addProduct(product);
    };

    return {
        handleChange,
        handleImagenChange,
        handleSubmit,
    };
}

export default useProduct;