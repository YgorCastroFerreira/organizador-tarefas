import React from 'react'
import './index.scss'
import {useState} from 'react'
import plus from '../../icons/plus.svg'

const Modal = ({lista}) => {
    const [info,setInfo] = useState(false)

    function InfoOn(){
        setInfo(true)
    }

    function InfoOff(){
        setInfo(false)
    }

    return(
        <div onMouseLeave={InfoOff} className='modal'>
    
            {/* {<p onMouseEnter={InfoOn}>
                *
            </p>} */}
            
            <img src={plus} onMouseEnter={InfoOn} className='modal___img'></img>
           



            {info === true &&(
                <section className='modal___section'>
                    <p>Tarefa: {lista.title}</p>
                    <p>Desc: {lista.description}</p>
                </section>

            ) }
        </div>
    )
}

export default Modal