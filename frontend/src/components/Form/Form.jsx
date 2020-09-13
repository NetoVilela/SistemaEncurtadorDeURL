import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* Components General */


const Form = styled.form`
    margin: 0 auto;
    margin-top: 10vh;
    display:flex;
    justify-content: center;
    flex-direction: column;
    padding: 3vh;
    width: 40%;
    border-radius: 4px;
    border: 2px solid rgba(0,0,0,0.8);
    background: #f1f4f3;

    @media only screen and (max-width: 430px){
        width:90%;
    }
    @media only screen and (min-width: 431px) and (max-width: 600px){
        width: 90%;
    }
    @media only screen and (min-width: 601px) and (max-width: 999px){   
        width: 70%;
    }
    @media only screen and (min-width: 1000px){
        width: 40%;
    }

`;

const Title = styled.h3`    
    margin: 0 auto;
    text-align: center;
    font-size: 1.4em;
    color: rgba(0,0,0,0.8);
    width: 60%;
    border-bottom: 2px solid rgba(0,0,0,0.8);
    margin-bottom: 4vh;
    padding-bottom: 2vh;

`;
const Small = styled.small`
    margin-top: 2vh;
    display: flex;
    justify-content: center;
`;

export default props => {
    return (
        <React.Fragment>
            <Form action={props.action} method={props.method} >
                <Title>{props.title}</Title>
                {props.children}
            </Form>
            <Small><p>{props.smallQuestion} <Link to={props.redirect}>{props.smallResponse}</Link></p></Small>
        </React.Fragment>

    )
}