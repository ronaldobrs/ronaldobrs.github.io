import React from 'react'
import './pg3.css'
import { Link } from 'react-router-dom'

function Pg3(){
        
        return(
         
            <div className='main'>

                <p className='titulo'>Solicitação de Inclusão no Serviço Pré-Hospitalar de Urgência e 
                Emergência</p>

                <img src={require('./linhatempo3.png')} className='linhatempo3'/>

                <div className='dadosendereco'>

                    <h2>Autorizações do Contratante</h2>
                    <p className="textopg3">Autorizo a Contratada a enviar notificações, inclusive referente a eventual 
                    inadimplência e</p>
                    <p className="textopg3">aviso de suspensão/rescisão de contrato, para o e-mail e celular 
                    aqui informados.</p>

                </div>

                <Link to='/'><p className='btn1pg3'>Cancelar</p></Link>
                <Link to='/components/pg4'><p className='btn2pg3'>Prosseguir</p></Link>
                
            </div>
        )
    }

export default Pg3