import React from 'react';
import { Container, Icon, Box } from '../screenn/styles';

export const SuccessScreen = () => {




    return (
        <Container>
            <Box>
                <Icon/>
                <h1>Ticket aberto com sucesso!</h1>
                <p>
                    Entraremos em contato assim que possível através do seu email 
                    <span> vvitorsilva@gmail.com </span> para solucionar o problema.
                </p>
                <p>
                    N° do seu ticket: <span>1234</span>
                </p>
            </Box>
        </Container>
    );
};

export default SuccessScreen;
