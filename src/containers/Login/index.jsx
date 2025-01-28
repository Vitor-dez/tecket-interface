
import  { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import { LTMHelpRequestType } from '../../enum/enum.jsx';
import { schema } from '../../schema/validation.jsx';
import { useFileInfo } from '../../utils/handleFileChange.jsx';
import { toast } from 'react-toastify';
import axios from 'axios';


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
    TextArea,
    ErrorMessage
} from './styles';

export const Login = () => {

    const api = axios
    const navigate = useNavigate();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState(null);
    const [fileInfo, handleFileChange] = useFileInfo();

    const {
        register,
        handleSubmit,
        setValue,
        clearErrors,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    });






    const onSubmit = async (data) => {
        console.log(data)
        setFormSubmitted(true);
        const formData = new FormData();
        formData.append('message', data.descri);
        formData.append('senderEmail', data.email);
        formData.append('senderName', data.name);
        formData.append('senderPhone', data.tel);
        formData.append('helpRequestType', data.opitions);
        formData.append('image', data.file[0]);

        const response = await toast.promise(

            api.post('http://api-stagging.licitem.com.br/api/v1/help-request', formData,
                {
                    headers:
                    {
                        'Content-Type': 'multipart/form-data',
                        'accept': 'application/json'
                    }

                }),
            {
                pending: 'Verificando seus dados',
                success: 'Enviado com sucesso',
                error: 'Algo deu errado tente novamente'
            }


        );



        console.log('Resposta da API:', response.data);

        setFormData(response.data.data);
        navigate('/tecket-interface/sucesso', { state: { userEmail: data.email } });





    };






    return (
        <Container>


            <Box onSubmit={handleSubmit(onSubmit)}>


                <BoxHeder>
                    <h1>Abertura de ticket</h1>
                    <p>Preencha o formulário e descreva o problema detalhadamente.</p>
                </BoxHeder>

                <BoxInput error={errors.name}>
                    <Label htmlFor="nome">Nome <Span>*</Span></Label>
                    <input className={errors.name ? 'error' : ''} {...register("name")} id="nome" placeholder='Digite seu nome' type="text" />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </BoxInput>


                <BoxInput error={errors.email}>
                    <Label htmlFor="email">Email <Span>*</Span></Label>
                    <input className={errors.email ? 'error' : ''} {...register("email")} id="email" placeholder='Digite seu email' type="text" />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>
                </BoxInput>


                <BoxInput error={errors.tel}>
                    <Label htmlFor="telefone">Telefone <Span>*</Span></Label>
                    <InputMask
                        mask="(99) 9 9999-9999"

                        {...register("tel")}
                        onChange={(e) => {
                            setValue('tel', e.target.value);
                            clearErrors('tel');
                        }}>
                        {(inputProps) => <input className={errors.tel ? 'error' : ''} {...inputProps} placeholder='(00) 9 0000-0000' type="text" />}
                    </InputMask>
                    <ErrorMessage>{errors.tel?.message}</ErrorMessage>
                </BoxInput>




                <Label htmlFor="tipoInformacoes">Tipo de informação <Span>*</Span></Label>

                <Select className={errors.opitions ? 'error' : ''} {...register("opitions")} id="tipoInformacoes">
                    <option value="">Selecione uma opção</option>
                    {Object.values(LTMHelpRequestType).map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </Select>
                <ErrorMessage>{errors.opitions?.message}</ErrorMessage>


                <LabelUpload>
                    <label>
                        Anexar foto
                        <input {...register("file")} type="file" accept=".jpg, .jpeg, .png," onChange={(e) =>
                            handleFileChange(e, setValue, clearErrors)} />
                    </label>


                    <LabelArquive className={errors.file ? 'error' : ''}>

                        {fileInfo.name ? (
                            <span>{`${fileInfo.name}`}</span>
                        ) : (
                            <span>Nenhum arquivo selecionado</span>
                        )}

                    </LabelArquive>

                </LabelUpload>
                <ErrorMessage>{errors.file?.message}</ErrorMessage>



                <Label htmlFor="description">Descrição <Span>*</Span></Label>

                <ErrorMessage>{errors.description?.message}</ErrorMessage>

                <TextArea
                    className={errors.description ? 'error' : ''}
                    {...register("description")}
                    id="description"
                    rows={7}
                    placeholder='Descreva seu problema....'
                    onChange={(e) => {
                        setValue('description', e.target.value);
                        clearErrors('description');
                    }}
                />

                <Button type='submit'>Enviar</Button>

            </Box>

        </Container>
    );
};

export default Login;
