import styled from "styled-components";




export const Container = styled.div`

width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #f6f6f6;
padding: 20px;


`;





export const Box = styled.form`

width: 416px;
height: 100%;
margin-bottom: 20px;
display: flex;
justify-content: center;
flex-direction: column;



`


export const BoxHeder = styled.div`
width: 100%;
height: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin-bottom: 15px;
padding: 5px;
font-family: "Roboto Condensed", sans-serif;


h1{
font-size: 32px;
font-weight: 400;
margin-bottom: 10px;
color: #313133;



}

p{
    width: 100%;
    color: grey;
    font-size: 16px;
   
}


`


export const BoxInput = styled.div`
width:100%;

display: flex;
justify-content: center;
flex-direction: column;


input{
    width: auto;
    font-size: 16px;
    height: 38px;
    font-weight: 400;
    padding: 10px;
    margin-top: 10px;
    border-radius: 4px;
    border: solid 1px #e0e1e2;
    margin-bottom: 20px;
    font-family: "Roboto Condensed", sans-serif;
}



input:hover{
    box-shadow: 0px 1px 23px 2px rgba(220,239,250,1);
}

`




export const Label = styled.p`
font-size: 16px;
color: #313133;
font-weight:500;
font-family: "Roboto", sans-serif;

`


export const Span = styled.span`
color: red;
font-weight:bold;

`;



export const Select = styled.select`
    width: auto;
    font-size: 16px;
    height: 38px;
    font-weight: 400;
    padding-left: 5px;
    margin-top: 10px;
    border-radius: 4px;
    border: solid 1px #e0e1e2;
    margin-bottom: 20px;
    font-family: "Roboto Condensed", sans-serif;
    color: grey;
`




export const LabelUpload = styled.div`
font-size: 16px;
color: #313223;
font-weight:500;
font-family: "Roboto", sans-serif;
display: flex;
margin: 0 0 20px ;


label{
    width: 100px;
    height: 38px;
    border: solid 1px #e0e1e2 ;
    border-right: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color:#e4e4e4 ;
    border-radius: 4px 0px 0 4px ; 
  
}`




export const LabelArquive = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 80%;
  height: 38px;
  border: solid 1px #e0e1e9 ;
  border-radius: 0px 4px 4px 0px ;
`

export const TextArea = styled.textarea`
width: auto;
border-radius: 4px;
border: solid 1px #e0e1e2 ;
padding: 10px;
font-size: 16px;
font-family: "Roboto Condensed", sans-serif;
margin: 10px 0 20px ;

`


export const Button = styled.button`

display: flex;
justify-content: center;
align-items: center;
width: auto;
height: 40px;
background: #0D6EFD;
border: 1px solid #0D6EFD;
border-radius: 4px;
color: #ffff;
font-size: 16px;
font-family: "Roboto Condensed", sans-serif;
`












