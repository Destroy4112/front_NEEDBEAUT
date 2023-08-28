import React, { useState } from 'react';
import imagenes from '../../Assets/Images/imagenes';
import { Container, Div, H2, Section, Spinner, Ul, alertError, alertWarning } from "../../Utilities";
import { Bienvenido, Buscador, HeaderInicio, ItemsCategoria, Tiendas } from '../../Components';
import { getTiendasPorProducto } from '../../Services/tiendaService';

function InicioPage() {

    const clase = "section";
    const clase2 = "resultado-tiendas";
    const titulo = "Categorias disponibles";
    const titulo2 = "Resultado de la busqueda";
    const categorias = [
        { descripcion: "Peluqueria", imagen: imagenes.peluqueria },
        { descripcion: "Barberia", imagen: imagenes.barberia },
        { descripcion: "Cuidado Facial y Corporal", imagen: imagenes.cuidado_facial },
        { descripcion: "Ropa", imagen: imagenes.ropa },
        { descripcion: "Accesorios", imagen: imagenes.accesorios },
        { descripcion: "Articulos de belleza", imagen: imagenes.articulos }
    ];
    const [buscador, setBuscador] = useState("");
    const [tiendas, setTiendas] = useState([]);
    const [loading, setLoading] = useState(false);

    const handlechange = (event) => {
        setBuscador(event.target.value);
    };

    const buscar = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);
            const data = await getTiendasPorProducto(buscador);
            setLoading(false);
            console.log(data);
            if (data.length !== 0) {
                setTiendas(data);
            } else {
                setBuscador("");
                setTiendas([]);
                alertWarning("No se encontro ningun producto");
            }
        } catch (error) {
            alertError("Algo salio mal, intenta nuevamente");
            setLoading(false);
        }
    };

    return (
        <>
            <HeaderInicio />
            <Section clase={clase}>
                <Container>
                    <Div clase="bienvenida">
                        <Bienvenido />
                        <Buscador buscador={buscador} handlechange={handlechange} buscar={buscar} />
                    </Div>
                </Container>
            </Section>
            {
                loading ?
                    <div className="container-spinner">
                        <Spinner />
                    </div>
                    :
                    tiendas.length === 0 ?
                        <Section clase={clase}>
                            <Container>
                                <H2 clase={"title-categoria"}>
                                    {titulo}
                                </H2>
                            </Container>
                            <Div clase="list-categias">
                                <Ul>
                                    <ItemsCategoria categorias={categorias} />
                                </Ul>
                            </Div>
                        </Section>
                        :
                        <Section clase={clase}>
                            <Container>
                                <H2 clase={"title-busqueda"}>
                                    {titulo2}
                                </H2>
                                <Div clase={clase2}>
                                    <Tiendas tiendas={tiendas} />
                                </Div>
                            </Container>
                        </Section>
            }
        </>
    );
}

export default InicioPage;