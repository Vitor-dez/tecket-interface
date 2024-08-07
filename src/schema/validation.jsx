
import * as Yup from "yup";

export const schema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    email: Yup.string().email("Digite um e-mail válido").required('Campo obrigatório'),
    tel: Yup.string().required('Campo obrigatório')
        .matches(/^\(\d{2}\) \d{1} \d{4}-\d{4}$/, 'Número de telefone inválido'),
        opitions: Yup.string().required('Selecione uma opção'),
        description: Yup.string().required('Descreva algo'),
    file: Yup.mixed().required('Por favor, selecione um arquivo')
        .test('fileType', 'Selecione um arquivo', (value) => {
            return value && ['image/jpeg', 'image/png', 'image/jpeg'].includes(value.type);
            
        }),

        
});


export default schema;