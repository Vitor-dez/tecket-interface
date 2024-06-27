import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputMask from 'react-input-mask';
import { LTMHelpRequestType } from '../../enum/enum.jsx';
import { schema } from '../../schema/validation.jsx';
import { useFileInfo } from '../../utils/handleFileChange.jsx';

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
    const {
        register,
        handleSubmit,
        setValue,
        clearErrors,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    });

    const [fileInfo, handleFileChange] = useFileInfo(); 
    const onSubmit = (data) => {
        console.log(data);
        // Aqui você pode enviar os dados para a API
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
                            setValue('tel', e.target.value); // Atualiza o valor no estado do formulário
                            clearErrors('tel'); // Limpa o erro do campo
                        }}
                    >
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
                        <input {...register("file")} type="file" accept=".jpg, .jpeg, .png, .svg" onChange={(e) => handleFileChange(e, setValue, clearErrors)} />
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
                
                <Label>Descrição <Span>*</Span></Label>
                <TextArea className={errors.descripition ? 'error' : ''} {...register("descripition")} rows={7} placeholder='Descreva seu problema....' error={errors.descripition} />
                <ErrorMessage>{errors.descripition?.message}</ErrorMessage>

                <Button type='submit'>Enviar</Button>
            </Box>
        </Container>
    );
};

export default Login;
