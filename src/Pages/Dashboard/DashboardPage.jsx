import React from 'react';
import { BotonCrear, Calificacion, Fotos, HeaderDashboard, Informacion, ModalCrear, ModalPerfil, ModalPortada, Perfil, Portada, Productos, TituloFotos } from "../../Components";
import { Div, Section } from "../../Utilities";
import { useSelector } from "react-redux";
import { ProductosContext } from '../../Context';
import { useModal } from '../../Hooks';

function DashboardPage() {

    return (
        <ProductosContext>
            <>
                <HeaderDashboard />
                <Section>
                    <Div clase={"contenedor-column"}>
                        <Portada />
                        <ModalPortada />
                        <Perfil />
                        <ModalPerfil />
                    </Div>
                </Section>
                <Section clase={"contenedor-info"}>
                    <Div clase={"contenedor-row"}>
                        <Informacion />
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
                                <BotonCrear />
                            </Div>
                            <Productos />
                        </Div>
                        <ModalCrear />
                    </Div>
                </Section>
                {/* <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} /> */}
            </>
        </ProductosContext>
    );
}

export default DashboardPage;