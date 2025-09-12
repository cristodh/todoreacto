import React, { useState,useEffect } from 'react'
import "../styles/Home.css"
import Header from '../components/Header'
import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList'
import { getData } from '../services/fetchs'

function Home() {
  const [listaTareas,setListaTareas] = useState([])

  useEffect(() => {
    async function traerTareas() {
      const data = await getData('tasks')
      setListaTareas(data)
    }
    traerTareas()
  }, [])
  

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
            <TaskList tasksList={listaTareas}/>
          </div>
        </div>
      </div>

 
  )
}

export default Home