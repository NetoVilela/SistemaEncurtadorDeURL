import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    justify-content: center;
    width: 85%;
    font-weight: bold;
    margin: 0 auto;

`;

export default props =>{
    return(
        <Container>
            {props.children}
        </Container>
    )
}