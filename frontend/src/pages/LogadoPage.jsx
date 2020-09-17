import React, { useEffect } from 'react';
// import { useHistory } from 'react-router';



export default props => {
    // let history = useHistory();

    useEffect(() => {
        localStorage.setItem("logado", String(true))
        // history.push('/user/shorten');
        window.location.href=process.env.REACT_APP_FRONT+"/user/shorten";
        
    }, []);

    return (
        <>

        </>
    )
}