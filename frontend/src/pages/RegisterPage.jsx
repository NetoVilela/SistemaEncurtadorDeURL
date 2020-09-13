import React from 'react';
import styled from 'styled-components';

/* Components general */
import BackHome from '../components/BackHome/BackHome';
import Form from '../components/Form/Form';
import Input from '../components/Input/Input';
import ButtonForm from '../components/ButtonForm/ButtonForm';

const RegisterPage = styled.div`
    background: rgb(151, 202, 229);
    border: solid 1px rgb(151, 202, 229);
    height: 100vh;
`;

export default props => {
    return (
        <RegisterPage>
            <BackHome />
            <Form
            title="Cadastro"
            method="POST"
            action="testeCadastro"
            smallQuestion="Já tem uma conta? " 
            smallResponse=" Faça login."
            redirect="/login"
            >
                <Input type="text" name="name" placeholder="Insira seu nome completo" />
                <Input type="email" name="email" placeholder="Insira seu email" />
                <Input type="password" nanme="password" placeholder="Insira sua senha" />
                <Input type="password" name="password2" placeholder="Insira novamente sua senha" />
                <ButtonForm>Cadastrar</ButtonForm>
            </Form>
        </RegisterPage>
    )
}