import React from 'react'
import Boton from './Boton'
import '../styles/InputTarea.css'
const InputTarea = () => {
  return (
    <div>
        <input className='inputTarea'  placeholder='Nombre tarea'/>
        <Boton click={()=>alert('adios')}/>
    </div>
  )
}

export default InputTarea