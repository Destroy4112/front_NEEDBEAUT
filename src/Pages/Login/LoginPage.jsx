import React from 'react';
import { Form, HeaderLogin, Links } from "../../Components";
import { Logo, Container, Div, Section, alertError, alertWarning } from "../../Utilities";
import { useState } from "react";
import { validarSesion } from "../../Services/loginService";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../../Models";
import { useDispatch } from "react-redux";
import { createUser } from "../../Redux/userSlice";
import '../../Assets/Css/styles.css';

function LoginPage() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [typeInput, setTypeInput] = useState("password");
    const [usuario, setUsuario] = useState({
        email: '',
        password: '',
    });

    function handleChange({ target }) {
        setUsuario({
            ...usuario,
            [target.name]: target.value
        });
    }

    const mostrar = () => {
        let tipo = typeInput === 'text' ? "password" : "text";
        setTypeInput(tipo)
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (usuario.email === "" || usuario.password === "") {
                alertWarning("Hay campos vacios en el formulario");
            } else {
                setIsLoading(true);
                setDisabled(true);
                const resultado = await validarSesion(usuario);
                setIsLoading(false);
                setDisabled(false);
                if (resultado.status === 2) {
                    setUsuario({ email: "", password: "" })
                    alertWarning("Credenciales invalidas");
                } else if (resultado.status === 0) {
                    setUsuario({ email: "", password: "" })
                    alertError("No se encuentra registrado en el sistema");
                } else {
                    dispatch(createUser(resultado.data));
                    navigate(PrivateRoutes.DASHBOARD);
                }
            }

        } catch (error) {
            setDisabled(false);
            setIsLoading(false);
            console.log(error.message);
            alertError("No se pudo establecer conexión con el servidor.");
        }
    };

    return (
        <>
            <HeaderLogin />
            <Section clase={"section"}>
                <Container>
                    <Div clase="formulario">
                        <Logo clase={"logo-registro"} />
                        <Form clase={"form"}
                            usuario={usuario}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            isLoading={isLoading}
                            typeInput={typeInput}
                            mostrar={mostrar}
                            disabled={disabled}
                        />
                        <Links />
                    </Div>
                </Container>
            </Section>
        </>
    );
}

export default LoginPage;