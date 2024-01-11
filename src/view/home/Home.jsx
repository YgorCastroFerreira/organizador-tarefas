import React from 'react'
import Header from '../../component/header/Header'
import './index.scss'
import Atividades from '../../component/atividades/atividades.jsx'
import { LISTA_MOCK } from '../../mock/lista.mock'

const Home = ({lista}) => {
  return (
    <div className='home'>
        <Header/>

        <div className='home___container1'>
          <p>Otimize seu tempo e se organize com o nosso Planejador Diário.</p>
        </div>

        <Atividades lista = {LISTA_MOCK}/>
    </div>
    
  )
}

export default Home