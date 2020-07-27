import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './BigRedButton.css'

const BigRedButton = ({onRoll, num}) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="mt-4">
          {/* style={{ height: '18rem' }}  className="mt-4 border border-button rounded-circle bigButton"> */}
          {/* <div classname="h-100 w-100" onClick={() => onRoll({ num })}> */}
          <Button className="btn btn-default btn-circle bigButton" onClick={() => onRoll({ num })}>
            <Row className="justify-content-center">
              <Col xs={6}>
                {num === 1 ?
                  <h5>Game Over!</h5> :
                  <p></p>
                }
                <div className="rounded p-2 numWindow">
                  <h1>{num}</h1>
                </div>
                {num === 1 ?
                  <h6 className="mt-1">Click to Reset</h6> :
                  <p></p>
                }
              </Col>
            </Row>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default BigRedButton;