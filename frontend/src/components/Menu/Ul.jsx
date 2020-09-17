import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UL = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

@media (max-width: 768px){
    padding-top: 10vh;
    flex-flow: column nowrap;
    background: #fff;
    top: 0;
    right: 0;
    position: fixed;
    height: 100vh;
    width: 40vw;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
}
`;

export default props => {
    return (
        <UL open={props.open}>
            <li><Link to="/cadastro" className="link btn btn-success ml-2 mt-2">Cadastre-se</Link></li>
            <li><Link to="/login" className="link btn btn-success ml-2 mt-2">Login</Link></li>
        </UL>
    )
}