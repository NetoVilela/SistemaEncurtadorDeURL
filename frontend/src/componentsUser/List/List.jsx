import React from 'react';
import styled from 'styled-components';

/* Components General */
import SideBar from '../SideBar/SideBar';

import api from '../../config/api';

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

class ListClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: [],
            urlsList: false
        }
    }

    async componentDidMount() {
        const response = await api.get(`/url/${this.props.match.params.id}`);
        this.setState({
            urls: response.data[0]
        });
        //checks if the user has shortened urls
        if (response.data[0].length > 0) {
            this.setState({
                urlsList: true
            });
        } else {
            this.setState({
                urlsList: false
            });
        }
    }

    render() {
        const { urls, urlsList } = this.state;

        if (urlsList) {
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
                                    {urls.map(url => {
                                        return (
                                            <tr key={url.id}>
                                                <td>{url.original_url}</td>
                                                <td>{url.new_url}</td>
                                                <td>{url.createdAt}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </Area>
                    </List>
                </ListPage>
            )
        }else{
            return(
                <ListPage>
                    <SideBar active="list" />
                    <List>
                        NENHUMA URL CADASTRADA.
                    </List>
                </ListPage>
            )
        }
    }
}

export default ListClass;