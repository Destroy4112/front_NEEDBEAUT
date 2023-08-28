import React from 'react';
import { Container, Div, Header } from '../../Utilities';
import LinkInicio from './LinkInicio';

function HeaderLogin() {
    return (
        <Header>
            <Container>
                <Div clase={"home"}>
                    <LinkInicio />
                </Div>
            </Container>
        </Header>
    );
}

export default HeaderLogin;