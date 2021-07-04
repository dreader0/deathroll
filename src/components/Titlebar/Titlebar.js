import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Titlebar.css'

const TitleBar = () => {
  return (
    <Container>
      <Row style={{"justifyContent": "center"}}>
        <Col lg={6}>
          <h3 className="mt-3 mb-4 background" style={{ color: '#F3F3F3', textShadow: '#000000AA -1px 2px'}}>deathroll</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default TitleBar;