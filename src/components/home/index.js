import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

function Home(){

        return(

            <div className='container'>

                <img src={require('./imghome.png')} className='imagemhome' alt='imagemhome'/>

                <div className='areabtn'>

                    <Link to='/components/pg1'><a className='botao' href='./components/pg1'>Solicitar</a></Link>

                </div>

                <div className='text'> 
                
                <p className='p1'>Serviço</p>
                <p className='p2'>Pré-Hospitalar</p>
                <p className='p3'>de Urgência</p>
                <p className='p4'>e Emergênciad</p>

                </div>

            </div>
        )
    }

export default Home