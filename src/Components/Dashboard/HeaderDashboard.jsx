import React, { useState } from 'react';
import { Container, H2, Header, Logo, Nav, NavLogout, Row, Ul } from '../../Utilities';
import { Logout } from './';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetUser } from '../../Redux/userSlice';
import { PublicRoutes } from '../../Models';

function HeaderDashboard() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const cerrarSesion = () => {
        dispatch(resetUser());
        navigate(PublicRoutes.LOGIN, { replace: true });
    };

    return (
        <Header clase={"header"}>
            <Container>
                <Row>
                    <H2>
                        <Logo clase={"logo-dashboard"} />
                    </H2>
                    <Nav >
                        <Ul>
                            <Logout toggleDropdown={toggleDropdown} />
                        </Ul>
                    </Nav>
                </Row>
            </Container>
            <NavLogout cerrarSesion={cerrarSesion} isOpen={isOpen} />
        </Header>
    );
}

export default HeaderDashboard;