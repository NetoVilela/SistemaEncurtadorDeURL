import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    font-family: 'Roboto', sans-serif;
    background: transparent;
    border: 0;
    border-bottom: 2px solid #89C64E;
    padding: 2vh;
    color: #fff;

    ::-webkit-input-placeholder { /* Edge */
    color: rgba(255,255,255,0.8);
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: rgba(255,255,255,0.8);
    }

    ::placeholder {
        color: rgba(255,255,255,0.8);
    }
    
`;

export default props => {
    return (
        <React.Fragment>
            <Input  autoComplete="off" type={props.type} name={props.name} placeholder={props.placeholder} required />
        </React.Fragment>

    )
}