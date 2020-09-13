import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 85%;
    margin: 0 auto;

`;

export default props =>{
    return(
        <Container>
            {props.children}
        </Container>
    )
}