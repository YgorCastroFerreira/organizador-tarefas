import React from 'react'
import Editar from '../../component/editar/Editar'
import Header from '../../component/header/Header'
import './index.scss'

const Edit = () => {
  return (
    <div className='edit'>
      <Header/>
      <section className='edit___container'>
        <Editar/>
      </section>
  </div>
  )
}

export default Edit