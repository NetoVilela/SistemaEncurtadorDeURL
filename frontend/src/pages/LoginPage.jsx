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
            action={process.env.REACT_APP_API_LOGIN}
            smallQuestion="Ainda não tem uma conta? " 
            smallResponse=" Cadastre-se."
            redirect="/cadastro"
            >
                <Input type="email" name="email" placeholder="Insira seu email" />
                <Input type="password" name="senha" placeholder="Insira sua senha" />
                <ButtonForm>Entrar</ButtonForm>
            </Form>
        </React.Fragment>
    )
}