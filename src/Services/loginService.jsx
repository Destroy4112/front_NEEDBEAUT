const URL_LOGIN = "https://backneedbeaut-production.up.railway.app/api/tiendas/login";
const URL_REGISTRO = "https://backneedbeaut-production.up.railway.app/api/tiendas";

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