import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import './ButtonOption.css'; //link adjusts css

const ButtonOption = styled.div`
    border-bottom: solid 1px #89c64e;
    margin: 0 1vh 0 1vh;
    padding: 1vh 3vh;
    border-radius: 2px;
    text-decoration: none;
    text-align: center;
    background: #89c64e;

    @media (max-width: 768px){
        margin: 1vh;
    }

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
        font-size: 1.3em;
    }

`;

export default props => {

    if(props.islink){
        return (
            <Link to={props.url} className="link">
            <ButtonOption>{props.children}</ButtonOption>
            </Link>
        )
    }else{
        return (
            <ButtonOption>{props.children}</ButtonOption>
        )
    }
    
}