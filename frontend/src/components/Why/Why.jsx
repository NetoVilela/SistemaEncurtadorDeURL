import React from 'react';
import styled from 'styled-components';

/* Components general */
import Cards from '../Card/Cards';

const Why = styled.div`
    margin-top: 4vh;
    width: 100%;
    padding: 3vh;
`;

const Title = styled.div`
    text-align:center;
    font-size: 1.5em;
`;

export default props => {
    return (
        <Why>
            <Title>Por quê eu devo usar um Encurtador de URL?</Title>
            <Cards />
        </Why>
    )
}