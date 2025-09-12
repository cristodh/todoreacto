import React from 'react'
import Task from './Task'

function TaskList({tasksList}) {
  return (
    <div>
      {/* 
        Tenemos que usar la lista de tareas (taskList) para mostrar el componente Task

        HAY QUE USAR UN .map
      */}
      {/* 
        Crear la funcion de eliminar asicrona y que parametro reciba el id

        Ejecutar el delData adentro de la funcion

        Pasar esta funcion en el componente Task
      */}
      {tasksList.map((lista)=>{
        return(
          <Task title={lista.Title} description={lista.Description} date={''} />
        )
      })}
    </div>
  )
}

export default TaskList