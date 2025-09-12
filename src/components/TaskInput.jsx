import React, { useState } from 'react'
import '../styles/TaskInput.css'
import { postData, getData, delData, patchData } from '../services/fetchs.js'

const TaskInput = () => {
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const fecha = new Date()

    /*POST DATA PROCESS*/
    async function postTasks() {
        if (!taskTitle || !taskDescription) {  //validacion
            alert('Todos los campos tienen que estar completos')
            return
        }
        const taskObj = {
            Title: taskTitle,
            Description: taskDescription,
            date: `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`
            
            
        }
        console.log(taskObj);
        
        const response = await postData(taskObj, 'tasks');
        console.log('Task Saved: ', response);

        setTaskTitle('');
        setTaskDescription('');
    }

    console.log(taskTitle,taskDescription);
    

    return (
        <div>
            <h2>Enter the new task below: </h2>

            <div className='columnaIzquierda'>
                <input onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        postTasks()
                    }
                }} type="text" placeholder='Task title'   maxLength={20} value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />  {/*  largo */}
                <br />
                <input onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        postTasks()
                    }
                }} type="text" placeholder='Description' maxLength={100} value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} /> {/*  corto */}
                <br />
                <div className='divBtnSend'>
                    <button className='btnSend' onClick={postTasks}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default TaskInput