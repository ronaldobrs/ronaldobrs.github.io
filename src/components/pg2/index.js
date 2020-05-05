import React from 'react'
import './pg2.css'
import { Link } from 'react-router-dom'

function Pg2(){
        
        return(
         
            <div className='main'>

                <p className='titulo'>Solicitação de Inclusão no Serviço Pré-Hospitalar de Urgência e 
                Emergência</p>

                <img src={require('./linhatempo2.png')} className='linhatempo2'/>
                
                <div className='dadosendereco'>

                    <h2>Entrega do Kit:</h2>

                    <p>
                    <input type="radio" name="citizenship" checked/>
                    <label>No endereço de correspondência</label>  <br />
                    <input type="radio" name="citizenship" /> Retirada no estabelecimento: 
                    <input className='inputpg2'/>
                    </p>

                </div>

                <Link to='/'><p className='btn1pg2'>Cancelar</p></Link>
                <Link to='/components/pg3'><p className='btn2pg2'>Prosseguir</p></Link>
                
            </div>
        )
    }

export default Pg2