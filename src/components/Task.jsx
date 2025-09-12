import React, { useState } from 'react'
import "../styles/Task.css"

function Task({title,description,date,clickDelete}) {
    const [showDropDown, setShowDropDown] = useState(false)
    return (
        <div className="task-card">
            <div className="task-header">
                <h3 className="task-title">{title}</h3>
                <button
                    className="toggle-btn"
                    onClick={() => setShowDropDown(!showDropDown)}
                >
                    {!showDropDown ? "Mostrar" : "Ocultar"}
                </button>
            </div>

            {showDropDown && (
                <div className="task-details">
                    <p className="task-field"><strong>Title:</strong>{title}</p>
                    <p className="task-field"><strong>Description:</strong>{description}</p>
                    <p className="task-field"><strong>Date Created:</strong>{date}</p>
                    <button className="remove-btn" onClick={clickDelete}>Remove</button>
                </div>
            )}
        </div>
    );

}
/*renderizado condicional reat*/
export default Task