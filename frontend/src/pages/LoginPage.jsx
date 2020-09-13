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
            title="Login"
            method="POST"
            action="testeLogin"
            smallQuestion="Ainda não tem uma conta? " 
            smallResponse=" Cadastre-se."
            redirect="/cadastro"
            >
                <Input type="email" name="email" placeholder="Insira seu email" />
                <Input type="password" nanme="password" placeholder="Insira sua senha" />
                <ButtonForm>Entrar</ButtonForm>
            </Form>
        </RegisterPage>
    )
}