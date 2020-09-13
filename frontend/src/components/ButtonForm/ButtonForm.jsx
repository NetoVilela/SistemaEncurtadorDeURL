import React from 'react';
import styled from 'styled-components';

const ButtonForm = styled.button`
    cursor: pointer;
    background: transparent;
    padding: 2vh;
    font-size: 1.2em;
    border-radius: 4px;
    color: #89C64E;
    border: 1px solid #89C64E;
    font-weight: bold;
    margin-top: 2vh;

    :hover{
        transition: 0.4s;
        color: #fff;
        background: #89C64E
    }

`;

export default props =>{
    return(
        <ButtonForm type="submit">
            {props.children}
        </ButtonForm>
    )
}