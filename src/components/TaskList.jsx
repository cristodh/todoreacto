import React from 'react'
import Task from './Task'
import { delData, patchData } from '../services/fetchs.js'

function TaskList({tasksList}) {
  async function eliminarTarea(id) {
    await delData('tasks',id)
  }

  async function completarTarea(id,state) {
      await patchData('tasks',{'Status': state === 'Pending' ? 'Complete' : 'Pending'},id)
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
          clickComplete={()=>completarTarea(lista.id,lista.Status)}
          clickDelete={()=>eliminarTarea(lista.id)}
          />
          
        )
      })}
    </div>
  )
}

export default TaskList