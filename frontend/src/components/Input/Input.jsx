import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    font-family: 'Roboto', sans-serif;
    background: transparent;
    border: 0;
    border-bottom: 2px solid rgba(0,0,0,0.8);
    margin-top: 1vh;
    padding: 2vh;


    ::-webkit-input-placeholder { /* Edge */
    color: rgba(0,0,0,0.4);

    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: rgba(0,0,0,0.4);

    }

    ::placeholder {
        color: rgba(0,0,0,0.4);

    }
    
`;

export default props => {
    return (
        <React.Fragment>
            <Input  autoComplete="off" type={props.type} name={props.name} placeholder={props.placeholder} required />
        </React.Fragment>

    )
}