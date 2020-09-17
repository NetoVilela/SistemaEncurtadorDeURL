import React, { useState } from 'react';
import styled from 'styled-components'
import Ul from './Ul';

const SideBar = styled.div`
    max-width: 130px;
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
    @media only screen and (max-width: 600px) {
        font-size: 0.7em;
    }
    @media only screen and (min-width: 768px) {
        font-size: 0.9em;
    }
    @media only screen and (min-width: 992px) {
        font-size: 1em;
    }
    @media only screen and (min-width: 1200px) {
        font-size: 0.9em;
    }
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