import React, { useState } from 'react';
import { FormRegistro, HeaderLogin, SpanRegistro } from "../../Components";
import { Container, Div, Logo, Section, alertError, alertSucces } from "../../Utilities";
import { registro } from "../../Services/loginService";
import { PrivateRoutes } from "../../Models";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../Redux/userSlice";
import '../../Assets/Css/styles.css';

function RegistroPage(props) {
    const clase = "formulario";
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [typeInput, setTypeInput] = useState("password");
    const [usuario, setUsuario] = useState({
        propietario: "",
        email: "",
        password: "",
        negocio: "",
        categoria: "",
        nit: "",
        ubicacion: "",
        telefono: "",
        slogan: "",
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
        e.preventDefault();
        try {
            setIsLoading(true);
            const resultado = await registro(usuario);
            setIsLoading(false);
            if (resultado) {
                alertSucces("Registrado correctamente");
                dispatch(createUser(resultado.data));
                navigate(PrivateRoutes.DASHBOARD);
            } else {
                alertError("Algo salio mal");
            }

        } catch (error) {
            setIsLoading(false);
            alertError("No se pudo establecer conexión con el servidor.");
        }
    };

    return (
        <>
            <HeaderLogin />
            <Section clase={"section"}>
                <Container>
                    <Div clase={clase}>
                        <Logo clase={"logo-registro"} />
                        <SpanRegistro />
                        <FormRegistro
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            isLoading={isLoading}
                            typeInput={typeInput}
                            mostrar={mostrar}
                        />
                    </Div>
                </Container>
            </Section>
        </>
    );
}

export default RegistroPage;