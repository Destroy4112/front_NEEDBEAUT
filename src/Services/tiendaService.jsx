import axios from "axios";

const URL_TIENDA = "https://backneedbeaut-production.up.railway.app/api/tiendas/";
const URL_TIENDA_CATEGORIA = "https://backneedbeaut-production.up.railway.app/api/tiendas/categoria/";
const URL_TIENDA_PRODUCTOS = "https://backneedbeaut-production.up.railway.app/api/products/";
const COMPLEMENTO = "/mostrarTiendaPorProducto";
const COMPLEMENTO2 = "/agregar-imagen-perfil";
const COMPLEMENTO3 = "/agregar-imagen-portada";

export async function cambiarPerfil(foto, id) {
    const options = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };
    const res = await axios.post(URL_TIENDA + id + COMPLEMENTO2, foto, options);
    return res.data;
}

export async function cambiarPortada(foto, id) {
    const options = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };
    const res = await axios.post(URL_TIENDA + id + COMPLEMENTO3, foto, options);
    return res.data;
}

export async function getTiendasPorCategoria(categoria) {
    const options = {
        headers: {
            "Content-type": "application/json",
        },
    };
    const res = await fetch(URL_TIENDA_CATEGORIA + categoria, options);
    return await res.json();
}

export async function getTiendasPorId(id) {
    const options = {
        headers: {
            "Content-type": "application/json",
        },
    };
    const res = await fetch(URL_TIENDA + id, options);
    return await res.json();
}

export async function getTiendasPorProducto(producto) {
    const options = {
        headers: {
            "Content-type": "application/json",
        },
    };
    const res = await fetch(URL_TIENDA_PRODUCTOS + producto + COMPLEMENTO, options);
    return await res.json();
}