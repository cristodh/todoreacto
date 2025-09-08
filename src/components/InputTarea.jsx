import React from 'react'
import BotonEnviar from './BotonEnviar'
import '../styles/InputTarea.css'
const InputTarea = () => {
    return (
        <div>
            <div className='inputTarea'>
                    <input type="text" placeholder='Nombre tarea' maxLength={20} />
                    <br/>
                    <input type="text" placeholder='Descripcion' maxLength={100} />
                <div className='columnaDerecha'>
                    <BotonEnviar click={() => alert('adios')} />
                </div>
            </div>
        </div>
    )
}

export default InputTarea