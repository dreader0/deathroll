import React from 'react';
import { Modal, Button } from 'react-bootstrap'
import './InfoModal.css'

const InfoModal = ({version, showModal, handleClose}) => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showModal}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          deathroll v{version}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>How to play</h4>
        <p>Press the Big Red Button.<br/>Follow the rule that appears.<br/>Take turns repeat that until the number reaches a skull.<br/>Whoever rolls the skull loses, punish them as you see fit.</p>
        <p>This game is far from perfect, so don't spam the button or it will probably break on you.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {handleClose()}}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InfoModal;