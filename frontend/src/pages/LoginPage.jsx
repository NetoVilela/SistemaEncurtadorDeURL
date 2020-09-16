import React, { useState } from 'react';

/* Components general */
import BackHome from '../components/BackHome/BackHome';
import Form from '../components/Form/Form';
import Input from '../components/Input/Input';
import ButtonForm from '../components/ButtonForm/ButtonForm';


export default props => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    return (
        <React.Fragment>
            <BackHome />
            <Form
                title="Login"
                method="POST"
                action={process.env.REACT_APP_API+'/usuario/login'}
                smallQuestion="Ainda não tem uma conta? "
                smallResponse=" Cadastre-se."
                redirect="/cadastro"
            >
                <Input type="email" name="email" onChange={e=>setEmail(e.target.value)} value={email} placeholder="Insira seu email" />
                <Input type="password" name="senha" onChange={e=>setSenha(e.target.value)} value={senha} placeholder="Insira sua senha" />
                <ButtonForm>Entrar</ButtonForm>
            </Form>
        </React.Fragment>
    )
}