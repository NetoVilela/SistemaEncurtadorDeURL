import React from 'react';
import styled from 'styled-components';

/* Components General */
import SideBar from '../SideBar/SideBar';

const ShortenPage = styled.div`
    display: flex;
    align-items: center;
`;

const Shorten = styled.div`
    margin: 0 auto;
    font-size: 4em;
`;

const AddURL = styled.div`
    display: flex;
    justify-content: center;
    
    input{
        width: 70%;
        background: #f7f7f7;
        padding: 1vh;
        border: solid 2px #333333;
        border-radius: 3px 0px 0px 3px;
    }
    button{
        width: 30%;
        border-radius: 0px 3px 3px 0;
        background: #89C64E;
        border: 1px solid #89C64E;
        font-weight: bold;
        color: #f7f7f7;
        cursor: pointer;
        height: 100%;
    }
    form{
        width: 100%;
    }

    @media only screen and (max-width: 430px){
        
        
    }
    @media only screen and (min-width: 431px) and (max-width: 600px){
        font-size: 1.3em;
    }
    @media only screen and (min-width: 601px) and (max-width: 999px){   
        font-size: 1.7em;
    }
    @media only screen and (min-width: 1000px){
        width: 50vw;
    }

`;

export default props => {
    return (
        <ShortenPage>
            <SideBar active="shorten" />
            <Shorten>
                <AddURL>
                    <form action={process.env.REACT_APP_API_SHORTEN_URL} method="post">
                        <input autoComplete="off" type="text" name="url" placeholder="Coloque aqui a sua URL" />
                        <button type="submit">Encurtar</button>
                    </form>
                </AddURL>
            </Shorten>
        </ShortenPage>
    )
}