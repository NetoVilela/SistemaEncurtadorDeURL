import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

/* Components general */
import Burguer from './Burguer';

const Menu = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1vh;

    .link-home{
        text-decoration: none;
        font-weight: bold;
    }
    padding-bottom: 2vh;

    .pointer{
        cursor: pointer;
    }
`;

export const Rows = styled.div`
    border-bottom: 2px solid #045c94;
`;


const Row = styled.div`
    display: flex;
    justify-content: center;
    color: #045c94;
    @media only screen and (max-width: 430px){
        font-size: 1.1em;
    }
    @media only screen and (min-width: 431px) and (max-width: 600px){
        font-size: 1.3em;
    }
    @media only screen and (min-width: 601px) and (max-width: 999px){   
        font-size: 1.7em;
    }
    @media only screen and (min-width: 1000px){
        font-size: 1.7em;
    }
`;

const Line = styled.div`
    border-bottom: solid 1px #045c94;
    width: 85%;
    margin: 2vh auto;
`;

export default props => {
    return (
        <React.Fragment>
            <Menu>
                <Link to="/" className='link-home' exact={true}>
                    <Rows>
                        <Row>SEURL</Row>
                        <Row>Sistema Encurtador de URL</Row>
                    </Rows>
                </Link>
                <Burguer />
            </Menu>
            <Line />
        </React.Fragment>
    )
}