import React from 'react';

/* Components general */
import Menu from '../components/Menu/Menu';
import Container from '../components/Container/Container';
import Explanation from '../components/Explanation/Explanation';
import Topic from '../components/Topic/Topic';
import Cards from '../components/Card/Cards';
import CardsLink from '../components/CardLink/CardsLink';
import Footer from '../components/Footer/Footer';

export default props => {
    return (
        <React.Fragment>
            <Menu />
            <Explanation />
            <Container>
                <Topic title="Por quê eu devo usar um Encurtador de URL?">
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