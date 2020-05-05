import React from 'react'
import './pg1.css'
import { Link } from 'react-router-dom'

function Pg1(){

        return(
            
            <div className='main'>

                <p className='titulo'>Solicitação de Inclusão no Serviço Pré-Hospitalar de Urgência e 
                Emergência</p>
                
                <img src={require('./linhatempo1.png')} className='linhatempo1'/>
                <div className='divtexto1'>

                    <h2>Confirme seus dados para prosseguir</h2>
                    <p>Pelo presente, eu <input className='inputpg1'/>, titular do plano de saúde individual/familiar da
                    Unimed Nordeste RS contrato nº <input className='inputpg1'/>, solicito a minha inclusão e dos meus dependentes, 
                    a partir do primeiro dia do mês subsequente, no Serviço Pré-Hospitalar de Urgência e 
                    Emergência, oferecido pela Unimed Nordeste RS a seus beneficiários, conforme detalhes a 
                    seguir.</p>

                </div>

                <div className='boxpreco'>

                    <p className='texto1'>Produtos Contratados</p>
                    <p className='texto2'>SOS Unimed - Pessoa Física</p>   
                    <h2 className='texto3'>R$ 00,00/mês</h2>
                    <p className='texto4'>Condição comercial: xxxxxxxxxxx</p>
                    <p className='texto4'>Percentual de desconto: 00%</p>
                    <p className='texto4'>Período: 00 meses</p>
                    <p className='texto4'>Valor Unitário: 00,00</p>
                    <p className='texto4'>Início da vigência: 01/04/2020</p>

                </div>

                <p className='btn1'>Alterar Dados</p>
                <Link to='/components/pg2'><p className='btn2'>Confirmar</p></Link>
                
            </div>
        )
    }

export default Pg1