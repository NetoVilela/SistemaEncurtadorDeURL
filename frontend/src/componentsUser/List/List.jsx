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
    height: 50vh;
    overflow: auto;
`;

const ListNone = styled.div`
    border:solid 1px #fff;
    background: #b5b5b5;
    padding: 3vh;
    border-radius: 4px;
    font-weight: bold;
    box-shadow: 2px 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    color: #fff;
    font-size: 1.1em;

`;

class ListClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: [],
            urlsList: false,
            
        }
        
    }

    async componentDidMount() {
        const response = await api.get(`/url/${this.props.match.params.id}`);
        this.setState({
            urls: response.data[0]
        });
        console.log(response.data[0])
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

    configureDate = (date) => {
        let day = date.substr(8, 2)
        let month = date.substr(5, 2);
        let year = date.substr(0, 4);
        return `${day}/${month}/${year}`;
        
    }

    render() {
        const { urls, urlsList } = this.state;
        let cont = 0;
        if (urlsList) {
            return (
                <ListPage>
                    <SideBar active="list" />
                    <List>
                        <Area>
                            <table className="table table-dark table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Url Original</th>
                                        <th scope="col">Nova URL</th>
                                        <th scope="col">Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {urls.map(url => {
                                        cont++;
                                        return (
                                            <tr key={url.id}>
                                                <th scope="row">{cont}</th>
                                                <td>{url.original_url}</td>
                                                <td>{url.new_url}</td>
                                                <td>{this.configureDate(url.createdAt)}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </Area>
                    </List>
                </ListPage>
            )
        } else {
            return (
                <ListPage>
                    <SideBar active="list" />
                    <List>
                        <ListNone>Nenhuma URL cadastrada até o momento.</ListNone>
                    </List>
                </ListPage>
            )
        }
    }
}

export default ListClass;