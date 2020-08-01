import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './NumWindow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedNumber from 'animated-number-react';


const NumWindow = ({ num, gameOver, playerList, turn }) => {
  return (
    <Row className="justify-content-center">
      <Col xs={6}>
        {gameOver ?
          <h6>Game Over {playerList[turn]}</h6> :
          playerList.length > 0 ?
            <h6>{playerList[turn]}</h6> :
          <p></p>
        }
        <div  className="rounded px-2 pt-2 pb-1 numWindow">
          {gameOver ?
            <h1 className="skull windowText"><FontAwesomeIcon icon="skull" /></h1> :
            <h1 className="windowText"> <AnimatedNumber value={num} formatValue={(value) => value.toFixed(0)}/></h1>
          }
        </div>
        {gameOver ?
          <h6 className="mt-1">Click to Reset</h6> :
          <p></p>
        }
      </Col>
    </Row>
  );
}

export default NumWindow;