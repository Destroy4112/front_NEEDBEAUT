import { createSlice } from "@reduxjs/toolkit";
import { crearStorage, removerStorage, usarStorage } from "../Utilities";

const key = "usuario";
const localStorage = usarStorage(key);

const userEmpty = {
    id: "",
    propietario: "",
    email: "",
    password: "",
    negocio: "",
    categoria: "",
    nit: "",
    ubicacion: "",
    telefono: "",
    perfil: "",
    portada: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState: localStorage ? localStorage : userEmpty,
    reducers: {
        createUser: (state, action) => {
            crearStorage(key, action.payload)
            return action.payload
        },
        updatePerfil: (state, action) => {
            state.perfil = action.payload
        },
        resetUser: () => {
            removerStorage(key);
            return userEmpty
        }
    },
})

export const { createUser, updatePerfil, resetUser } = userSlice.actions;
export default userSlice.reducer;