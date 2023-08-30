import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Div, Section, Spinner } from '../../Utilities';
import { BotonWhatsapp, Calificacion, Fotos, HeaderInicio, InformacionTienda, PerfilTienda, PortadaTienda, TituloFotos } from '../../Components';
import { getTiendasPorId } from '../../Services/tiendaService';

function TiendaPage() {

    const { id } = useParams();
    const [tienda, setTienda] = useState({});
    const [loading, setLoading] = useState(false);

    const consultarTienda = async () => {
        try {
            setLoading(true);
            const data = await getTiendasPorId(id);
            console.log(data);
            setLoading(false);
            if (data) {
                setTienda(data);
            }
        } catch (error) {
            setLoading(false);
            console.log(error.message);
        }
    }

    useEffect(() => {
        consultarTienda();
    }, []);

    return (
        <>
            <HeaderInicio />
            {
                loading ?
                    <div className="container-spinner">
                        <Spinner />
                    </div> :
                    (
                        <>
                            <Section>
                                <Div clase={"contenedor-column"}>
                                    <PortadaTienda user={tienda} />
                                    <PerfilTienda user={tienda} />
                                </Div>
                            </Section>
                            <Section clase={"contenedor-info"}>
                                <Div clase={"contenedor-row"}>
                                    <InformacionTienda user={tienda} />
                                    <Calificacion />
                                </Div>
                            </Section>
                            <Section clase={"contenedor-info"}>
                                <Div clase={"contenedor-column foto-list"}>
                                    <TituloFotos clase={"titulo-fotos"} titulo={"Fotos"} />
                                    <Fotos />
                                </Div>
                            </Section>
                            {/* <Section clase={"contenedor-info"}>
                                <Div clase={"contenedor-column foto-list"}>
                                    <Productos />
                                </Div>
                            </Section> */}
                            <BotonWhatsapp telefono={tienda.telefono} />
                        </>
                    )
            }
        </>
    );
}

export default TiendaPage;