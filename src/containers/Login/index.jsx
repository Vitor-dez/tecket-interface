import React from 'react';
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputMask from 'react-input-mask';
import  {LTMHelpRequestType}  from '../../enum/enum.jsx'


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





    const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        email: Yup.string().email("Digite um e-mail válido").required('Campo obrigatório'),
        tel: Yup.string().required('Campo obrigatório')
            .matches(/^\(\d{2}\) \d{1} \d{4}-\d{4}$/, 'Número de telefone inválido')
    });

    const {
        register,
        handleSubmit,
        setValue,
        clearErrors,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    });

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
                    <input {...register("name")} id="nome" placeholder='Digite seu nome' type="text" />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </BoxInput>

                <BoxInput error={errors.email}>
                    <Label htmlFor="email">Email <Span>*</Span></Label>
                    <input {...register("email")} id="email" placeholder='Digite seu email' type="text" />
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
                        {(inputProps) => <input {...inputProps} placeholder='(00) 9 0000-0000' type="text" />}
                    </InputMask>
                    <ErrorMessage>{errors.tel?.message}</ErrorMessage>
                </BoxInput>

                <Label htmlFor="tipoInformacoes">Tipo de informação <Span>*</Span></Label>
                <Select {...register("opitions")} id="tipoInformacoes">
                    <option value="">Selecione uma opção</option>
                    {Object.values(LTMHelpRequestType).map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </Select>

                <LabelUpload>
                    <label>
                        Anexar foto
                        <input type="file" accept=".jpg, .jpeg, .png" />
                    </label>
                    <LabelArquive>
                        <input type="text" />
                    </LabelArquive>
                </LabelUpload>

                <Label>Descrição <Span>*</Span></Label>
                <TextArea {...register("descripition")} rows={10} placeholder='Descreva seu problema....' error={errors.descripition} />
                <ErrorMessage>{errors.descripition?.message}</ErrorMessage>

                <Button type='submit'>Enviar</Button>
            </Box>
        </Container>
    );
};
