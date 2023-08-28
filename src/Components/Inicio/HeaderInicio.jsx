import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, Container, Header, Nav, Ul, Li, Row } from "../../Utilities";
import { PublicRoutes } from '../../Models';

function HeaderInicio() {

    return (
        <Header>
            <Container>
                <Row>
                    <Link to={PublicRoutes.INICIO}>
                        <Logo clase={"logo-header"} />
                    </Link>
                    <Nav >
                        <Ul>
                            <Li />
                        </Ul>
                    </Nav>
                </Row>
            </Container>
        </Header>
    );
}

export default HeaderInicio;