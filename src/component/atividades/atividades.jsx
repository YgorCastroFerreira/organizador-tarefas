import React, { useCallback } from 'react'
import './index.scss'
import {useState} from "react";
import check from '../../icons/check.svg'
import del from '../../icons/del.svg'
import edit from '../../icons/edit.svg'
import uncheck from '../../icons/uncheck.svg'
import plus from '../../icons/plus.svg'
import Modal from '../modal/Modal'

const atividades = ({lista}) => {

    // let [status, setStatus] = useState();
   
  return (
    <div className='atividades'>
               
        <div className='atividades___tabela'>
            <div className='atividades___col1'>
                <p>Tarefa</p>
                <hr className='atividades___hr'></hr>
                <ul>
                {lista.map((task) => (
                    <section>
                        <li className='atividades___modal'>
                            {task.title}
                        </li>
                    </section>
                    
                ))}
                </ul>
                <li>
                    <p>Nova tarefa...</p>
                </li>
            </div>

            <div className='atividades___colMod'>
                <p>Info</p>
                <hr className='atividades___hr'></hr>
                {lista.map((task) => (
                    <section>
                        <li className=''>
                            <Modal lista = {task}/>
                        </li>
                    </section>
                    
                ))}
            </div>

            <div className='atividades___col2'>
                <p>Status</p>
                <hr className='atividades___hr'></hr>
                <ul>
                    {lista.map((task) => {
                        if(task.completed === true){
                            return (
                                <li>
                                    <img 
                                        src={check} 
                                        alt='error...'
                                        // onClick={()=>{
                                        //     setStatus(task.completed=false)}
                                        // }
                                        ></img>
                                </li>
                            )
                        }else {
                            return(
                                <li>
                                    <img 
                                        src={uncheck} 
                                        alt='error...'
                                        // onClick={()=>{
                                        //     setStatus(task.completed=true)
                                        // }
                                        
                                        // }
                                        ></img>
                                </li>
                            )
                        }
                    }                        
                    )} 
                </ul>
            </div>

            <div className='atividades___col3'>
                <p>Opções</p>
                <hr className='atividades___hr3'></hr>
                <ul>
                {lista.map((task) => (
                    <li>
                        <a href='/edit'><img className='atividades___icons' src={edit}></img></a>
                        <a href='/delete'><img className='atividades___icons' src={del}></img></a>
                    </li>
                ))}
                    <li>
                        <img 
                            src={plus} 
                            className='atividades___plus' 
                            alt='error'
                            // onClick = {add(lista)}
                            >
                            </img>
                    </li> 
                </ul>
            </div>
        </div>
        


    </div>

  )
}

export default atividades