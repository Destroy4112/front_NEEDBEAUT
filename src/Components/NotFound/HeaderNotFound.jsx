import React from 'react';
import { Container, Div, Header } from "../../Utilities";
import { FaArrowRotateLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { PublicRoutes } from '../../Models';

function HeaderNotFound() {
    return (
        <Header>
            <Container>
                <Div clase={"home"}>
                    <Link to={PublicRoutes.INICIO}>
                        <FaArrowRotateLeft /> Volver
                    </Link>
                </Div>
            </Container>
        </Header>
    );
}

export default HeaderNotFound;