import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HeaderInicio, Tiendas } from '../../Components';
import { getTiendasPorCategoria } from '../../Services/tiendaService';
import { Container, Div, H2, Section } from '../../Utilities';


function CategoriasPage() {

    const clase = "section";
    const clase2 = "resultado-tiendas";
    const titulo = "Resultado categoria Moda ";
    const { categoria } = useParams();
    const [tiendas, setTiendas] = useState([]);
    const [loading, setLoading] = useState(false);

    const consultarTiendas = async () => {
        try {
            setLoading(true);
            const data = await getTiendasPorCategoria(categoria);
            setLoading(false);
            if (data) {
                setTiendas(data);
            }
        } catch (error) {
            setLoading(false);
            console.log(error.message);
        }
    }

    useEffect(() => {
        consultarTiendas();
    }, []);

    return (
        <>
            <HeaderInicio />
            <Section clase={clase}>
                <Container>
                    <H2 clase={"title-busqueda"}>
                        {titulo}
                    </H2>
                    <Div clase={clase2}>
                        <Tiendas tiendas={tiendas} loading={loading} />
                    </Div>
                </Container>
            </Section>
        </>
    );
}

export default CategoriasPage;