import React from 'react';
import styled from 'styled-components';

/* Components General */
import SideBar from '../SideBar/SideBar';

const ListPage = styled.div`
    display: flex;
    align-items: center;
`;

const List = styled.div`
    margin: 0 auto;
    width: 90vw;
    display: flex;
    justify-content: center;
`;

const Area = styled.div`
    height: 60vh;
    max-width: 80vw;
    border: solid 1px black;
    overflow: auto;

    @media only screen and (max-width: 430px){
    
    }
    @media only screen and (min-width: 431px) and (max-width: 600px){
        
    }
    @media only screen and (min-width: 601px) and (max-width: 999px){   
        
    }
    @media only screen and (min-width: 1000px){
        
    }

    table{
        width: 100%;
        position: relative;
    }
    thead tr{
        border-bottom: 1px solid black;
    }
    tr{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 2vh;
        border-bottom: 1px solid black;
    }
    
    tr:nth-child(2n){
        background: #c3c3c3;
    }
    td{
        white-space: normal
    }
    tbody tr td:nth-child(1){
        width: 50%;
        word-wrap:break-word;
    }
    tbody tr td:nth-child(2){
        width: 30%;
        word-wrap:break-word;
        
    }
    tbody tr td:nth-child(3){
        width: 20%;
        word-wrap:break-word;
        
    }
`;

export default props => {
    return (
        <ListPage>
            <SideBar active="list" />
            <List>
                <Area>
                    <table>
                        <thead>
                            <tr>
                                <th>Url Original</th>
                                <th>Nova URL</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>www.google.com.brwaasdasdadsadsaasdadsadsaasdadsadsaasdadsadsaasdadsadsaasdadsadsadasdasdasdasedawdwadwadwawd</td>
                                <td>www.google.com.com.com.com.br</td>
                                <td>05/05/2000</td>
                            </tr>
                            <tr>
                                <td>www.google.com.br</td>
                                <td>www.google.com.br</td>
                                <td>05/05/2000</td>
                            </tr>
                            <tr>
                                <td>www.google.com.br</td>
                                <td>www.google.com.br</td>
                                <td>05/05/2000</td>
                            </tr>
                            <tr>
                                <td>www.google.com.br</td>
                                <td>www.google.com.br</td>
                                <td>05/05/2000</td>
                            </tr>

                        </tbody>
                    </table>
                </Area>
            </List>

        </ListPage>
    )
}