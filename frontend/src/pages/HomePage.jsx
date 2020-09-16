import React, { useEffect } from 'react';
import axios from 'axios';

/* Components general */
import Menu from '../components/Menu/Menu';
import Container from '../components/Container/Container';
import Explanation from '../components/Explanation/Explanation';
import Topic from '../components/Topic/Topic';
import Cards from '../components/Card/Cards';
import CardsLink from '../components/CardLink/CardsLink';
import Footer from '../components/Footer/Footer';

export default props => {

    useEffect(()=>{
        const request = async () =>{
            axios.get('http://localhost:8081')
        }
        request();
    })

    return (
        <React.Fragment>
            <Menu />
            <Explanation />
            <Container>
                <Topic title="Por quê eu devo usar o SEURL?">
                    <Cards />
                </Topic>
                <Topic title="Não perca mais tempo!">
                    <CardsLink />
                </Topic>
                <Footer />
            </Container>
        </React.Fragment>
    )
}