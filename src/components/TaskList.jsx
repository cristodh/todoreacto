import React from 'react'
import Task from './Task'

function TaskList() {
  return (
    <div>
      <div className="tabs">
        <button className="tab" data-tab="Pending">Pending</button>
        <button className="tab" data-tab="completed">Completed</button>
        <button className="tab" data-tab="deleted">Deleted</button>
      </div>

      <div className="contenido-tabs">
        <div className="solicitud" id="solicitud">
          <Task/>
        </div>
      </div>
    </div>
  )
}

export default TaskList