const URL_LOGIN = "http://localhost:8000/api/tiendas/login";
const URL_REGISTRO = "http://localhost:8000/api/tiendas";

export async function validarSesion(user) {
    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(user)
    };
    const res = await fetch(URL_LOGIN, options);
    return await res.json();
}

export async function registro(user) {
    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(user)
    };
    const res = await fetch(URL_REGISTRO, options);
    return await res.json();
}