import React from 'react'
import './index.scss'

const Editar = () => {
  return (
    <div className='editar'>
        <h1> Deseja editar esse item?</h1>
        <section className='editar___botoes'>
            <button className='editar___botao1'>Não</button>
            <button className='editar___botao2'>Sim</button>
        </section>
    </div>
  )
}

export default Editar