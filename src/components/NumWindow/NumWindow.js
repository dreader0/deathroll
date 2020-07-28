import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './NumWindow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedNumber from 'animated-number-react';


const NumWindow = ({formatValue, num}) => {
  return (
    <Row className="justify-content-center">
      <Col xs={6}>
        {num === 1 ?
          <h5>Game Over!</h5> :
          <p></p>
        }
        <div className="rounded px-2 pt-2 pb-1 numWindow">
          {num === 1 ?
            <h1 className="skull"><FontAwesomeIcon icon="skull" /></h1> :
            <h1> <AnimatedNumber value={num} formatValue={formatValue}/></h1>
          }
        </div>
        {num === 1 ?
          <h6 className="mt-1">Click to Reset</h6> :
          <p></p>
        }
      </Col>
    </Row>
  );
}

export default NumWindow;