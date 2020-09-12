import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    padding: 1vh;
    width: 300px;
    min-width: 300px;
    background: #97CAE5;
    border-radius: 4px;
    margin: 2vh;
    .icon{
        padding: 2vh;
        border-radius: 4px;
        color: ${({ color }) => color};
        font-size: 3em;
        display: flex;
        justify-content: center;
        background: #fff;
    }

    :hover{
        transition: 0.4s;
        box-shadow: 2px 2px 4px #333;
    }

`;

const TitleCard = styled.div`
    font-size: 1.4em;
    display:flex;
    justify-content: center;
    background: #fff;
    font-weight: bold;
`;
const Description = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-size: 1em;
    background: #fff;
    padding: 2vh;
    height: 4vh;
    border-radius: 4px;
`;

export default props => {
    return (
        <Card color={props.color}>
            <i className={props.icon}></i>
            <TitleCard>{props.title}</TitleCard>
            <Description>{props.description}</Description>
        </Card>
    )
}