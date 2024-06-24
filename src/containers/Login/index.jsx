import {
    Container,
    Box,
    Span,
    BoxHeder,
    BoxInput,
    Label,
    Select,
    Button,
    LabelUpload,
    LabelArquive,
    TextArea

} from './styles'



export const Login = () => {



    return (

        <Container>





            <Box>


                <BoxHeder>
                    <h1>Abertura de ticket</h1>

                    <p>Preencha o formulário e descreva o problema detalhadamente.</p>
                </BoxHeder>


                <BoxInput>
                    <Label htmlFor="nome">Nome <Span>*</Span></Label>
                    <input id="nome" placeholder='Digite seu nome' type="text" />
                </BoxInput>

                <BoxInput>

                    <Label htmlFor="email">Email <Span>*</Span></Label>
                    <input id="email" placeholder='Digite seu email' type="text" />
                </BoxInput>

                <BoxInput>
                    <Label htmlFor="telefone">Telefone <Span>*</Span></Label>
                    <input id="telefone" placeholder='(00) 9 0000-0000' type="text" />
                </BoxInput>

                <Label htmlFor="tipoInformacoes">Tipo de informação <Span>*</Span></Label>

                <Select id="tipoInformacoes">
                    <option value="Selecione uma opção">Selecione uma opção</option>
                    <option value="opcao1">Opção 1</option>
                    <option value="opcao2">Opção 2</option>
                </Select>



                <LabelUpload>
                    <label htmlFor="file-upload">
                        Anexar foto
                        <input
                            type="file"
                            id="file-upload"
                            accept=".jpg, .jpeg, .png"
                            style={{ display: 'none' }}
                        />
                    </ label>

                    <LabelArquive>
                        {'foto.jpg'}
                        <input
                            type="text"
                            style={{ display: 'none' }}
                        />
                    </LabelArquive>

                    
                </LabelUpload>





                <Label>Descrição <Span>*</Span></Label>
                <TextArea rows={10} placeholder='Descreva seu problema....' name="" id=""></TextArea>







                <Button >Enviar</Button >




            </Box>

        </Container>






    )



}
