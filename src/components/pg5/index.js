import React from 'react'
import './pg5.css'
import { Link } from 'react-router-dom'

function mostra(){

    document.getElementById('md').style.display = 'block'
    document.getElementById('aceite').style.display = 'none'
    document.getElementById('dadosendereco').style.display = 'none'
    document.getElementById('btn1pg5').style.display = 'none'
    document.getElementById('btn2pg5').style.display = 'none'
    document.getElementById('sair').style.display = 'block'
    
}

function Pg5(){
        
        return(
         
            <div className='main'>

                <p className='titulo'>Solicitação de Inclusão no Serviço Pré-Hospitalar de Urgência e 
                Emergência</p>

                <img src={require('./linhatempo5.png')} className='linhatempo5'/>

                <div className='hidden' id='md'>

                    <img className='check' src='https://i.postimg.cc/PqHfk8WK/check.png' />
                    <h5 className='textosucesso'>Solicitação Finalizada com Sucesso</h5>
                    <a href='https://drive.google.com/file/d/1RK6gk2FBYa6UxdZRylGJE7X_1KVaHbLv/view' 
                    className='download'>Fazer download do contrato</a>
            
                </div>

                <div className='aceite' id='aceite'>
                
                    <input type="checkbox" className='checkBox' />
                    <label className="textopg5">Declaro ter recebido, o contrato do produto opcional ora contratado,
                    devidamente registrado em cartório.</label>
                    
                </div>

                <div className='dadosendereco' id='dadosendereco'>

                    <h2>Assinatura Contratante</h2>
                    <hr className="linha"/>
                    <p className="textopg5"> XXXXXXXXXXXXXXXXXXXXXXXX </p>
                    <p className="textopg5">01 de abril de 2020</p>

                </div>

                <Link to='/'><p className='btn1pg5' id='btn1pg5'>Cancelar</p></Link>
                <p className='btn2pg5' id='btn2pg5' onClick={mostra}>Prosseguir</p>
                <Link to='/'><p id='sair'>Sair</p></Link>

            </div>
        )
    }

export default Pg5