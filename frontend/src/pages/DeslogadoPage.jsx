import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

export default props => {

    let history = useHistory();

    useEffect(() => {
        localStorage.setItem("logado", String(false));
        history.push('/login');
    }, [history]);

    return (
        <>
        </>
    )
}