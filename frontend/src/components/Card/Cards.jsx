import React from 'react';
import styled from 'styled-components';

/* Components General */
import Card from './Card';

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 2vh;
`;

export default props => {
    return (
        <Cards>
            <Card title="Grátis" icon="fas fa-coins icon" color="#ffd700" description="Use quantas vezes quiser." />
            <Card title="Aberto" icon="fas fa-lock-open icon" color="#89c64e" description="Acompanhe o registro de URLS encurtadas." />
            <Card title="Simples" icon="far fa-smile-wink icon" color="#045c94" description="Faça o cadastro e comece a usar." />
        </Cards>
    )
}