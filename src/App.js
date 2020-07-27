import React, {Component} from 'react';
// import logo from './logo.svg';
import Titlebar from './components/Titlebar/Titlebar';
import Rolled from './components/Rolled/Rolled';
import BigRedButton from './components/BigRedButton/BigRedButton';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

const initialState = {
  rule: {
    num: 123,
    text: "not a rule"
  },
}

const rulesList = {
  69: {
    num: 69,
    text: "lock arms and drink"
  },
  420: {
    num: 420,
    text: "blaze it"
  }
}
  
class App extends Component{
  constructor() {
    super()
    this.state = initialState;
    this.dupe = 2;
  }

  onRoll = ({ num }) => {
    var newNum
    if (num === 1) {
      newNum = 500;
    } else {
      newNum = Math.ceil(Math.random() * num);
    }
    var newText = ""
    if (newNum === 1) {
      newText = "YOU LOSE";
    } else {
      if (rulesList[newNum]) {
        newText = rulesList[newNum];
      } else {
        newText = "drink"
      }
    }
    if (newNum === num) {
      newText += (" X" + this.dupe)
      this.dupe++;
    } else {
      this.dupe = 2;
    }
    this.setState({
        rule: {
          num: newNum,
          text: newText
        }
      })
    
  }

  render() {
    return (
        <Container className="App">
          <Row>
            <Col><Titlebar /></Col>
          </Row>
          <Row>
            <Col><Rolled num={this.state.rule.num} text={this.state.rule.text}/></Col>
          </Row>
          <Row>
            <Col><BigRedButton num={this.state.rule.num} onRoll={this.onRoll}/></Col>
          </Row>
        </Container>
    );
  }
}

export default App;
