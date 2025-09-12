import React, { useState } from 'react'
import "../styles/Task.css"

function Task() {
    const [showDropDown, setShowDropDown] = useState(false)
    return (
        <div className="task-card">
            <div className="task-header">
                <h3 className="task-title">Title</h3>
                <button
                    className="toggle-btn"
                    onClick={() => setShowDropDown(!showDropDown)}
                >
                    {!showDropDown ? "Mostrar" : "Ocultar"}
                </button>
            </div>

            {showDropDown && (
                <div className="task-details">
                    <p className="task-field"><strong>Title:</strong> Title Content</p>
                    <p className="task-field"><strong>Description:</strong> Description Content</p>
                    <p className="task-field"><strong>Date Created:</strong> Date Content</p>
                    <button className="remove-btn">Remove</button>
                </div>
            )}
        </div>
    );

}
/*renderizado condicional reat*/
export default Task