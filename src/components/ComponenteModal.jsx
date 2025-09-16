import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { patchData } from '../services/fetchs';

function ComponenteModal({show,hide}) {

  const handleClose = () => hide;
  const handleShow = () => show;
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

    async function editTaks(id) {
        const objTaks = {
            Title:taskTitle,
            Description:taskDescription
        }
        await patchData('tasks',objTaks,id)
    }


  return (
    <>
      <Modal show={show} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>Eitar tards</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <input onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        postTasks()
                    }
                }} type="text" placeholder='Task title'   maxLength={20} value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />  {/*  largo */}
                <br />
                <input onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        postTasks()
                    }
                }} type="text" placeholder='Description' maxLength={100} value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} /> {/*  corto */}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>editTaks(localStorage.getItem('idTarea'))}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ComponenteModal;