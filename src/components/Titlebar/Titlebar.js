import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Titlebar.css'

const TitleBar = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="mt-3 background" style={{ color: '#F3F3F3', textShadow: '#000000AA -1px 2px'}}>deathroll</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default TitleBar;