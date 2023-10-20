import React from 'react';
import { BotonCrear, BotonCrearFoto, Calificacion, Fotos, HeaderDashboard, Informacion, ModalCrear, ModalDestacadas, ModalPerfil, ModalPortada, Perfil, Portada, Productos, TituloFotos } from "../../Components";
import { Div, Section } from "../../Utilities";
import { ProductosContext } from '../../Context';

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
                        <Div clase={"content-titulos-boton"}>
                            <TituloFotos clase={"titulo-fotos"} titulo={"Fotos"} />
                            <BotonCrearFoto />
                        </Div>
                        <Fotos />
                    </Div>
                    <ModalDestacadas />
                </Section>
                <Section clase={"contenedor-info"}>
                    <Div clase={"content-productos"}>
                        <Div clase={"content-titulos-boton"}>
                            <TituloFotos clase={"titulo-productos"} titulo={"Productos"} />
                            <BotonCrear />
                        </Div>
                        <Productos />
                    </Div>
                    <ModalCrear />
                </Section>
                {/* <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} /> */}
            </>
        </ProductosContext>
    );
}

export default DashboardPage;