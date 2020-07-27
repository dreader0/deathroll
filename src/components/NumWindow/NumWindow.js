import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './NumWindow.css'

const NumWindow = ({num}) => {
  return (
    <Row className="justify-content-center">
      <Col xs={6}>
        {num === 1 ?
          <h5>Game Over!</h5> :
          <p></p>
        }
        <div className="rounded px-2 pt-2 pb-1 numWindow">
          <h1>{num}</h1>
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