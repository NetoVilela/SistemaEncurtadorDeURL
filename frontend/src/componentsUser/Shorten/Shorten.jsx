import React from 'react';
import styled from 'styled-components';

/* Components General */
import SideBar from '../SideBar/SideBar';
// import request from '../../config/api';

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
    
    form{
        width: 100%;
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
                    <form action={process.env.REACT_APP_API + '/url/shorten'} method="post">
                        <div className="form-group">
                            <label htmlFor="url">URL desejada</label>
                            <input autoComplete="off" className="form-control" id="url" type="text" name="url" placeholder="Coloque aqui a sua URL" />
                            <small id="url" className="form-text text-muted">Basta copiar uma URL e colar aqui. ;)</small>
                        </div>
                        <button type="submit" className="btn btn-success">Encurtar URL</button>
                    </form>
                </AddURL>
            </Shorten>
        </ShortenPage>
    )
}