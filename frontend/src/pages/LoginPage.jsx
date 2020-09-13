import React from 'react';

/* Components general */
import BackHome from '../components/BackHome/BackHome';
import Form from '../components/Form/Form';
import Input from '../components/Input/Input';
import ButtonForm from '../components/ButtonForm/ButtonForm';


export default props => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}