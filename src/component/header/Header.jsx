import React from 'react'
import './index.scss'
import Organizacao from '../organizacao/Organizacao'
import Tarefas from '../tarefas/Tarefas'

const Header = () => {
  return (
    <div className='header'>
        <Organizacao/>
        <Tarefas/>
    </div>
  )
}

export default Header