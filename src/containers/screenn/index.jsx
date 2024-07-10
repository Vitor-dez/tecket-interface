import React from 'react';
import { Container, Icon, Box, Button } from '../screenn/styles';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



export const SuccessScreen = () => {

const navigate = useNavigate()
    const location = useLocation();
    const userEmail = location.state && location.state.userEmail;


const returnTeckt = () => {

 return(navigate('/tecket-interface', {replace: true}))
}




    return (




        <Container>
            <Box>
                <Icon />
                <h1>Ticket aberto com sucesso!</h1>
                <p>
                    Entraremos em contato assim que possível através do seu email
                    {userEmail && (<span> {userEmail} </span> )}
                    para solucionar o problema.
                </p>
                <p>
                    N° do seu ticket: <span>1234</span>
                </p>

                <Button onClick={returnTeckt}>OK</Button>

            </Box>




        </Container>



    );
};

export default SuccessScreen;
