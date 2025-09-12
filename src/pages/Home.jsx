import React from 'react'
import "../styles/Home.css"
import Header from '../components/Header'
import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList'

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
            <TaskList/>
          </div>
        </div>
      </div>

 
  )
}

export default Home