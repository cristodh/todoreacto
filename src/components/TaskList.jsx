import React, { useState } from 'react'
import Task from './Task'
import { delData, patchData } from '../services/fetchs.js'
import ComponenteModal from './ComponenteModal.jsx'

function TaskList({tasksList,mostrarModal}) {

  async function eliminarTarea(id) {
    await delData('tasks',id)
  }

  async function completeTask(id,state) {
      await patchData('tasks',{'Status': state === 'Pending' ? 'Completed' : 'Pending'},id)
  }
  return (
    <div>
      {tasksList.map((lista)=>{
        return(
          <Task
          key={lista.id}
          title={lista.Title}
          description={lista.Description}
          date={lista.Date}
          state={lista.Status}
          clickComplete={()=>completeTask(lista.id,lista.Status)}
          clickDelete={()=>eliminarTarea(lista.id)}
          clickEdit={()=>{
            mostrarModal()
            localStorage.setItem('idTarea',lista.id)
          }}
          />
          
        )
      })}
     
    </div>
  )
}

export default TaskList