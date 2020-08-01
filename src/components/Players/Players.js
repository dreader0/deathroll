import React from 'react';
import { FormControl, Row, Col, InputGroup, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Players.css'
  

const Players = ({playerList, inputName, addName, onNameChange}) => {
    return (
      <div>
        <Row className="justify-content-center mb-2">
          <Col xs={10}>
          <InputGroup>
              <FormControl className="playerEntry" type="input" placeholder="new player" value={inputName} onKeyUp={(event) => {if(event.key === "Enter") {addName()}}} onChange={(e) => {onNameChange(e)}}/>
            <InputGroup.Append>
              <Button variant="dark" onClick={() => {addName()}}><FontAwesomeIcon icon="plus" className="pt-1"/></Button>
            </InputGroup.Append>
          </InputGroup>
          </Col>
        </Row>
          {playerList.join(" - ")}
      </div>
    );
  
}

export default Players;