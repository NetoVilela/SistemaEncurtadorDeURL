import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ButtonLeft = styled.div`
    
    .icon-button-left{
        font-size: 2em;
        cursor: pointer;
    }

`;

export default props => {
    const [stateButton, setStateButton] = useState(1);

    return (
        <ButtonLeft onClick={
            ()=>{
                setStateButton(stateButton*(-1));
                props.setStateButtonLeft(stateButton)}}
        >
            <i class="fas fa-chevron-left icon-button-left"></i>
        </ButtonLeft>
    )
}