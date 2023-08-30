import axios from "axios";

const URL_PRODUCTO = "https://backneedbeaut-production.up.railway.app/api/products";
const URL_TIENDA = "https://backneedbeaut-production.up.railway.app/api/tiendas/productos-por-tiendas/";

export async function agregarProducto(producto) {
    const options = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };
    const res = await axios.post(URL_PRODUCTO, producto, options);
    return res.data;
}

export async function consultarProductosPorTienda(tienda) {
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const res = await axios.get(URL_TIENDA + tienda, options);
    return res.data;
}