import styled from "styled-components";
import SuccessIcon from '../../assets/successicon.png';


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
padding: 15px 15px;
 
`;

export const Icon = styled.img`
  width: 100px; 
  height: 100px; 
  background: url('${SuccessIcon}');
  border-radius: 50px;
  margin-bottom: 20px;
  background-size: cover;
  

`;

export const Box = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Roboto Condensed", sans-serif;
  line-height: 30px;

 

  h1 {
    font-size: 30px;
    font-weight: 400;
  }

  p {
    font-weight: 400;
    font-size: 15px;
    color: gray;
  }

  span {
    font-weight: 600;
    color: black;
  }

`;


export const Button = styled.button`

width: 200px;
height: 30px;
margin-top: 30px;
border: none;
color: #ffff;
background-color: #078a28;
border-radius: 5px;

&:active{
  transition: 1s;
  border: solid 1px #076c;
}




`



