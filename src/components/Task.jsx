import React, { useState } from 'react'

function Task() {
    const [showDropDown, setShowDropDown] = useState(false)
    return (
        <div>
            <h3>Title: </h3>
            <button onClick={()=>setShowDropDown(!showDropDown)}>{!showDropDown ? "Mostrar" : "Ocultar"}</button>
            {showDropDown && ( //condicional
                <div>
                    <p>Title Content</p>
                    <h4>Description: </h4>
                    <p>Description Content</p>
                    <h4>Date Created: </h4>
                    <p>Date Content</p>
                    <button>Remove</button>
                </div>
            )}
        </div>
    )
}
/*renderizado condicional reat*/
export default Task