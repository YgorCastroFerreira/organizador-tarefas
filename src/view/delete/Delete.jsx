import React from 'react'
import Header from '../../component/header/Header'
import './index.scss'
import Excluir from '../../component/excluir/Excluir'

const Delete = () => {
  return (

  <div className='delete'>
    <Header/>
    <section className='delete___container'>
      <Excluir/>
    </section>
  </div>
    
    
  )
}

export default Delete