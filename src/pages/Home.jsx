import React, { useState,useEffect } from 'react'
import "../styles/Home.css"
import Header from '../components/Header'
import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList'
import { getData } from '../services/fetchs'
import ProgressBar from '../components/ProgressBar'
import ComponenteModal from '../components/ComponenteModal'

function Home() {
  const [listaTareas,setListaTareas] = useState([])
  const [showModal,setShowModal] = useState(false)

  function mostrarModal() {
      setShowModal(true)
  }
  
  function ocultarModal() {
      setShowModal(false)
  }
  useEffect(() => {
    async function traerTareas() {
      const data = await getData('tasks')
      setListaTareas(data)
    }
    traerTareas()
  }, [listaTareas])
  

  return (
      <div>
        <Header />
        <div>
          <ProgressBar tasksList={listaTareas}/>
        </div>
        <div className='columnas'>
          <div className='columnaIzquierda'>
            <TaskInput />
          </div>
          <div className='columnaDerecha'>
            <TaskList tasksList={listaTareas} mostrarModal={mostrarModal}/>
            {showModal && <ComponenteModal show={showModal} hide={ocultarModal}/>}
          </div>
        </div>
      </div>

 
  )
}

export default Home