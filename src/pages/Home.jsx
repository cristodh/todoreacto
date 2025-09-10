import React from 'react'
import Header from '../components/Header'
import TaskInput from '../components/TaskInput'
import "../styles/Home.css"
import Task from '../components/Task'

function Home() {
  return (
    <div>
      <Header />
      <div>
        Barra de progeso
      </div>
      <div className='columnas'>
        <div className='columnaIzquierda'>
          <TaskInput />
        </div>
        <div className='columnaDerecha'>
        <Task/>
        </div>
      </div>
    </div>
  )
}

export default Home