import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
/* Components General */

const Ul = styled.ul`
    list-style: none;
    color: #fff;
    margin-top: 12vh;  
`;

const Li = styled.li`
    width: 80%;
    margin-top: 10vh;
    padding-bottom: 2vh;
    border-bottom: 1px solid #fff;

    .link-li{
        color: #fff;
        text-decoration: none;
    }
    .link-li:hover{
        transition: 0.3s;
        color: #9e9e9e;
    }
    .active{
        color: #9e9e9e;
    }

    .logout{
        margin-top: 10vh;
    }

    .btn-link{
        border: none;
        background: transparent;
        cursor: pointer;
    }
    .btn-link:hover{
        transition: 0.3s;
        color: #9e9e9e;
    }
`;

export default props => {

    if (props.active === 'shorten') {
        return (
            <Ul>
                <Li><Link className="link-li active" to="/user/shorten">Encurtar URL</Link></Li>
                <Li>
                    <form action={process.env.REACT_APP_API+"/url/list"} method="post">
                        <button className="link-li btn-link" type="submit">Listar minhas URLs</button>
                    </form>
                </Li>
                <Li><a className="link-li" href={process.env.REACT_APP_API+'/usuario/sair'}>Sair</a></Li>
            </Ul>
        )
    }
    if (props.active === 'list') {
        return (
            <Ul>
                <Li><Link className="link-li" to="/user/shorten">Encurtar URL</Link></Li>
                <Li>
                    <form action={process.env.REACT_APP_API+"/url/list"} method="post">
                        <button className="link-li active btn-link" type="submit">Listar minhas URLs</button>
                    </form>
                </Li>
                <Li><a className="link-li" href={process.env.REACT_APP_API+'/usuario/sair'}>Sair</a></Li>
            </Ul>
        )
    }
}