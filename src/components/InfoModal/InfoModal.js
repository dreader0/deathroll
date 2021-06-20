import React from 'react';
import { Modal, Button } from 'react-bootstrap'
import './InfoModal.css'

const InfoModal = ({showModal, handleClose}) => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showModal}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          deathroll v0.5.6
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>How to play</h4>
        <p>Press the Big Red Button</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {handleClose()}}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InfoModal;