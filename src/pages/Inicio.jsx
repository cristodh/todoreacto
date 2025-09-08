import React from 'react'
import InputTarea from '../components/InputTarea'
import Boton from '../components/Boton'

const Inicio = () => {
  return (
    <div>
        <InputTarea/>

        <Boton click={()=>alert('hola')}/>
       

    </div>
  )
}

export default Inicio