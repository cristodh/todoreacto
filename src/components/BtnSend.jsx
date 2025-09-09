import React from 'react'
import "../styles/BtnSend.css"

const BtnSend = ({click}) => {
  return (
    <div>
        <a onClick={click} href="#" className="send">Agregar Tarea</a>
    </div>
  )
}

export default BtnSend