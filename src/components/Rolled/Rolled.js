import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Rolled.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Rolled = ({text, rolling}) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={10} lg={6}>
          <Card className="mt-4 pt-2 pb-1 rollCard">
            {rolling ?
              <h5 className="rollingIcon rollText"><FontAwesomeIcon icon="skull" /></h5> :
              <h5 className="rollText">{text}</h5>
            }
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Rolled;