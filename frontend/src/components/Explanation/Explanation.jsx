import React from 'react';
import styled from 'styled-components';


const Explanation = styled.div`
    display: flex;
    justify-content: center;
    background: #97CAE5;
    color: #333;
    font-weight: bold;
    padding: 10vh;
    
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

const ExplanationContent = styled.div`
    text-align: center;
    h1{
        font-size: 1.8em;
    }
    p{
        margin-top: 2vh;
        font-size: 1.2em;
    }
`;

export default props => {
    return (
        <Explanation>
            <ExplanationContent>
                    <h1> O que é um Encurtador de URL?</h1>
                    <p>Um encurtador de URL, como o nome sugere, serve para reduzir o tamanho de um link, compactando o endereço de uma página da web.</p>
            </ExplanationContent>
        </Explanation>
    )
}