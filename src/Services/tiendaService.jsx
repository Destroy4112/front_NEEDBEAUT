import axios from "axios";

const URL_TIENDA = "http://localhost:8000/api/tiendas/";
const URL_TIENDA_CATEGORIA = "http://localhost:8000/api/tiendas/categoria/";
const URL_TIENDA_PRODUCTOS = "http://localhost:8000/api/products/";
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