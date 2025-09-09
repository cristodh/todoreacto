import React, { useState } from 'react'
import BotonEnviar from './BtnSend'
import '../styles/TaskInput.css'

const TaskInput = () => {
    const [taskTitle,setTaskTitle] = useState('')
    const [taskDescription,setTaskDescription] = useState('')

    

    /*
        Crear una funcion asincrona que se llame agregar tarea (addTask)
    
        Dentro de la funcion crear un objeto que se llame objTarea

        Dentro de la funcion llamar al postData

        y darle los datos
    */

    return (
        <div>
            <h2>Ingrese su nueva tarea aqui</h2>
            <div className='taskInput'>
                    <input type="text" placeholder='Nombre tarea' maxLength={20} onChange={function(e){setTaskTitle(e.target.value)}}/>  {/*  largo */}
                    <br/>
                    <input type="text" placeholder='Descripcion' maxLength={100} onChange={(e)=>setTaskDescription(e.target.value)}/> {/*  corto */}
                <div className='columnaDerecha'>
                    <BotonEnviar click={() => alert('adios')} />
                </div>
            </div>
        </div>
    )
}

export default TaskInput