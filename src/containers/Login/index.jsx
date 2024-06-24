

import { useForm } from "react-hook-form"
import * as Yup from "yup";
import { useFormik } from 'formik';
import { yupResolver } from "@hookform/resolvers/yup";

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

const schema = Yup.object().shape({
name: Yup.string().required(),
email: Yup.string().required(),
tel: Yup.string().required('Por favor, informe o seu telefone'),
arquivo: Yup.mixed().required('Por favor, adicione uma foto')

})




    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => console.log(data)


    return (




        <Container>


            <Box onSubmit={handleSubmit(onSubmit)}>

                <BoxHeder>
                    <h1>Abertura de ticket</h1>

                    <p>Preencha o formulário e descreva o problema detalhadamente.</p>
                </BoxHeder>


                <BoxInput >
                    <Label htmlFor="nome">Nome <Span>*</Span></Label>
                    <input  {...register("name")} id="nome" placeholder='Digite seu nome' type="text" />
                </BoxInput>

                <BoxInput form onSubmit={handleSubmit(onSubmit)}>

                    <Label htmlFor="email">Email <Span>*</Span></Label>
                    <input  {...register("email")} id="email" placeholder='Digite seu email' type="text" />
                </BoxInput>

                <BoxInput form onSubmit={handleSubmit(onSubmit)}>
                    <Label htmlFor="telefone">Telefone <Span>*</Span></Label>
                    <input {...register("tel")} id="telefone" placeholder='(00) 9 0000-0000' type="text" />


                </BoxInput>

                <Label htmlFor="tipoInformacoes">Tipo de informação <Span>*</Span></Label>

                <Select {...register("opitions")} id="tipoInformacoes">
                    <option value="Selecione uma opção">Selecione uma opção</option>
                    <option value="opcao1">Opção 1</option>
                    <option value="opcao2">Opção 2</option>
                </Select>



                <LabelUpload>
                    <label htmlFor="file-upload">
                        Anexar foto
                        <input
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            style={{ display: 'none' }}
                            {...register("arquivo")}
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
                <TextArea  {...register("descripition")} rows={10} placeholder='Descreva seu problema....'></TextArea>



                <Button type='submit' >Enviar</Button >








            </Box>

        </Container>






    )



}
