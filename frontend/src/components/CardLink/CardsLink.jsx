import React from 'react';
import styled from 'styled-components';

/* Components General */
import CardLink from './CardLink';

const CardsLink = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 2vh;
`;

export default props => {
    return (
        <CardsLink>
            <CardLink url="/cadastro" icon="fas fa-hand-pointer" textButton="Ok, vou me cadastrar!" />
            <CardLink url="/login" icon="fas fa-hand-pointer" textButton="Quero fazer meu login." />

        </CardsLink>
    )
}