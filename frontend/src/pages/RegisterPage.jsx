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
        </React.Fragment>
    )
}