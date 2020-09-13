import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* Components General */
import ButtonOption from '../ButtonOption/ButtonOption';



const CardLink = styled.div`
    padding: 1vh;
    width: 300px;
    min-width: 300px;
    background: #fff;
    border: solid 9px #97CAE5;
    border-radius: 4px;
    margin: 2vh;
    
    .link{
        text-decoration: none;
    }

    .icon-link{
        display: flex;
        justify-content: center;
        color: #000;
        font-size: 6em;
        margin-bottom: 3vh;
        opacity: ${({ opacity }) => opacity};
    }

`;



export default props => {

    let [opacity, setOpacity] = useState(1);
    let [statusOpacity, setStatusOpacity] = useState(false);

    // opacity = 1, statusOpacity = false;

    useEffect(() => {
        const interval = setInterval(() => {

            statusOpacity ? setOpacity(opacity + 0.1) : setOpacity(opacity - 0.1);

            if (opacity <= 0) {
                setStatusOpacity(true);
            }
            if (opacity >= 1) {
                setStatusOpacity(false);
            }
        }, 50)
        return () => clearInterval(interval);

    }, [opacity, opacity]);

    return (
        <Link className="link" to={props.url}>
            <CardLink opacity={opacity}>
                <i className={props.icon + ' icon-link'}></i>
                <ButtonOption islink={false} >
                    {props.textButton}
                </ButtonOption>>
            </CardLink>
        </Link>
    )
}