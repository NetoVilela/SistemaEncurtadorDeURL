import React, { useEffect } from 'react';
// import { useHistory } from 'react-router';



export default props => {

    // let history = useHistory();

    useEffect(() => {
        localStorage.setItem("logado", String(true));
        // history.push('/user/shorten');
        window.location.href="http://localhost:3000/user/shorten";
    }, []);

    return (
        <>

        </>
    )
}