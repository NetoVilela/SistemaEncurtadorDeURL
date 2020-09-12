import React from 'react';

/* Components general */
import Menu from '../components/Menu/Menu';
import Container from '../components/Container/Container';
import Explanation from '../components/Explanation/Explanation';
import Why from '../components/Why/Why';

export default props => {
    return (
        <React.Fragment>
            <Menu />
            <Explanation />
            <Container>
                <Why />
            </Container>
        </React.Fragment>
    )
}