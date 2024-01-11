import React from 'react'
import './index.scss'

const Excluir = () => {
  return (
    <div className='excluir'>
        <h1> Deseja excluir esse item?</h1>
        <section className='excluir___botoes'>
            <button className='excluir___botao1'>Não</button>
            <button className='excluir___botao2'>Sim</button>
        </section>
    </div>
  )
}

export default Excluir