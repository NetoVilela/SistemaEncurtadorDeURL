import React from 'react';
import styled from 'styled-components';

const Topic = styled.div`
    margin-top: 4vh;
    width: 100%;
    padding: 3vh;
`;

const Title = styled.div`
    text-align:center;
    font-size: 2.4em;
`;

export default props => {
    return (
        <Topic>
            <Title>{props.title}</Title>
            {props.children}
        </Topic>
    )
}