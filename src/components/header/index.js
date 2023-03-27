import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

function Header(){
    return(

        <header id='main-header'>

            <img src={require('./logounimed.png')} className='logo'/>

            <nav className='menuheader'>

                <Link to='/'> <h4 className='link1'>A Unimed&nbsp;</h4> </Link>
                <div className="linha-vertical"></div>

                <Link to='/querosercliente'> <h4 className='link2'>&nbsp;Quero ser Cliente&nbsp;</h4> </Link>
                <div className="linha-vertical"></div>

                <Link to='/ans'><h4 className='link3'>&nbsp;ANS&nbsp;</h4> </Link>
                <div className="linha-vertical"></div>

                <Link to='/atendimentoouvidoria'> <h4 className='link4'>&nbsp;Atendimento/Ouvidoria&nbsp;</h4></Link>
                <div className="linha-vertical"></div>

                <Link to='/acessorestrito'> <h4 className='link5'>&nbsp;Acesso Restrito</h4> </Link>
                
            </nav>

        </header>
    )
}

export default Header
