import React, { useState } from 'react';
import { BotonCrear, Calificacion, Fotos, HeaderDashboard, Informacion, ModalCrear, ModalPerfil, ModalPortada, Perfil, Portada, Productos, TituloFotos } from "../../Components";
import { Div, Modal, Section } from "../../Utilities";
import { useSelector } from "react-redux";

function DashboardPage() {

    const user = useSelector((state) => state.user);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalPerfil, setModalPerfil] = useState(false);
    const [modalPortada, setModalPortada] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const openModalPerfil = () => {
        setModalPerfil(true);
    };

    const closeModalPerfil = () => {
        setModalPerfil(false);
    };

    const openModalPortada = () => {
        setModalPortada(true);
    };

    const closeModalPortada = () => {
        setModalPortada(false);
    };

    return (
        <>
            <HeaderDashboard />
            <Section>
                <Div clase={"contenedor-column"}>
                    <Portada user={user} openModal={openModalPortada} />
                    <ModalPortada user={user.id} closeModal={closeModalPortada} modalIsOpen={modalPortada} />
                    <Perfil user={user} openModal={openModalPerfil} />
                    <ModalPerfil user={user.id} closeModal={closeModalPerfil} modalIsOpen={modalPerfil} />
                </Div>
            </Section>
            <Section clase={"contenedor-info"}>
                <Div clase={"contenedor-row"}>
                    <Informacion user={user} />
                    <Calificacion />
                </Div>
            </Section>
            <Section clase={"contenedor-info"}>
                <Div clase={"contenedor-column foto-list"}>
                    <TituloFotos clase={"titulo-fotos"} titulo={"Fotos"} />
                    <Fotos />
                </Div>
            </Section>
            <Section clase={"contenedor-info"}>
                <Div clase={"contenedor-column"}>
                    <Div clase={"content-productos"}>
                        <Div clase={"contenedor-row pro"}>
                            <TituloFotos clase={"titulo-productos"} titulo={"Productos"} />
                            <BotonCrear openModal={openModal} />
                        </Div>
                        <Productos />
                    </Div>
                    <ModalCrear user={user.id} closeModal={closeModal} modalIsOpen={modalIsOpen} />
                </Div>
            </Section>
            {/* <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} /> */}
        </>
    );
}

export default DashboardPage;