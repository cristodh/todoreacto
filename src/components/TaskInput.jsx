import React, { useState } from 'react'
import BotonEnviar from './BtnSend'
import '../styles/TaskInput.css'
import { postData, getData, delData, patchData } from '../services/fetchs.js'

const TaskInput = () => {
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')


    /*POST DATA PROCESS*/
    async function postTasks() {
        if (!taskTitle || !taskDescription) {  //validacion
            alert('METASE EN LA VARA')
            return
        }
        const taskObj = {
            Title: taskTitle,
            Description: taskDescription
            
        }
        const response = await postData(taskObj, 'tasks');
        console.log('Task Saved: ', response);

        setTaskTitle('');
        setTaskDescription('');
    }



    return (
        <div>
            <h2>Enter the new task below: </h2>

            <div className='columnaIzquierda'>
                <input onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        postTasks()
                    }
                }} type="text" placeholder='Nombre tarea'   maxLength={20} value={taskTitle} onChange={function (e) { setTaskTitle(e.target.value) }} />  {/*  largo */}
                <br />
                <input onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        postTasks()
                    }
                }} type="text" placeholder='Descripcion' maxLength={100} value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} /> {/*  corto */}
                <BotonEnviar click={() => postTasks()} />
            </div>
            <div className='columnaDerecha'>
            </div>
        </div>
    )
}

export default TaskInput