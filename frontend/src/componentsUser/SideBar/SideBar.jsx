import React, { useState } from 'react';
import styled from 'styled-components';

/* Components General */
import Ul from './Ul';

const SideBar = styled.div`
    .width-true{
        max-width: 200px;
    }
    .width-false{
        transition: 0.4s;
        width:0;
    }
    
    background: #333333;
    height: 100vh;
    padding-top: 2vh;
    ${({ stateButton }) => stateButton ? 'width: 200px' : 'width: 0px; overflow: hidden'};

    .link-home{
        text-decoration: none;
    }
`;

const Rows = styled.div`
    padding-bottom: 1vh;
    border-bottom: 1px solid #fff;
`;

const Row = styled.div`
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 0.9em;
    text-align: center;
`;

const SideBarGeneral = styled.div`
    display:flex;
    align-items: center;
`;

const Button = styled.div`
    .icon-button{
        font-size: 2em;
        cursor: pointer;
    }
`;
export default props => {
    const [stateButton, setStateButton] = useState(true)
    const [icon, setIcon] = useState("fas fa-chevron-left icon-button");

    return (
        <SideBarGeneral>
            <SideBar stateButton={stateButton}>
                <div className="link-home">
                    <Rows>
                        <Row>SEURL</Row>
                        <Row>Sistema Encurtador de URL</Row>
                    </Rows>
                </div>
                <Ul active={props.active} />
            </SideBar>

            <Button
                onClick={() => {
                    setStateButton(!stateButton);
                    stateButton ? setIcon("fas fa-chevron-right icon-button") : setIcon("fas fa-chevron-left icon-button")
                }
                }>
                <i className={icon}></i>
            </Button>
        </SideBarGeneral>
    )
}