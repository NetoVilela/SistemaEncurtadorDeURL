import React from 'react';
import { Link } from 'react-router-dom';

import './BackHome.css';

export default props =>{
    return(
        <Link className="link-backhome" to="/">Voltar para a página inicial</Link>
    )
}