import React from 'react'
import './pg4.css'
import { Link } from 'react-router-dom'

function Pg4(){
        
        return(
         
            <div className='main'>

                <p className='titulo'>Solicitação de Inclusão no Serviço Pré-Hospitalar de Urgência e 
                Emergência</p>

                <img src={require('./linhatempo4.png')} className='linhatempo4'/>

                <div className='dadosendereco'>

                    <h2>Informações Importantes</h2>
                    <p className="textopg3">A forma de pagamento bem como a formato de recebimento das faturas
                    e vencimentos, seguirão nos mesmos moldes do plano de saúde.</p>
                    <p className="textopg3">Todos os beneficiários do plano assistencial, que estejam dentro 
                    das normas do produto e limites de idades, serão automaticamente incluídos no Seguro Família.</p>

                </div>

                <Link to='/'><p className='btn1pg4'>Cancelar</p></Link>
                <Link to='/components/pg5'><p className='btn2pg4'>Prosseguir</p></Link>
                
            </div>
        )
    }

export default Pg4