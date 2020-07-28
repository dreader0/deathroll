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
  buttonNum: 123,
  rolling: false
}

const rulesList = [{
    num: 69,
    text: "lock arms and drink"
  },{
    num: 420,
    text: "blaze it"
  },{
    num: 17,
    text: "naked mile"
  }
]
  
class App extends Component{
  constructor() {
    super()
    this.state = initialState;
    this.dupe = 2;
  }

  formatValue = (value) => value.toFixed(0);

  onRoll = (num) => {
    var newNum
    var stateTimeout = 1000
    if (num === 1) {
      newNum = 500;
    } else {
      newNum = Math.ceil(Math.random() * num);
    }
    var newText = "drink"
    if (newNum === 1) {
      newText = "YOU LOSE";
    } else {
      for (var i = 0; i < rulesList.length; i++) {
        if (rulesList[i].num === newNum) {
          newText = rulesList[i].text;
        }
      }
      
    }
    if (newNum === num) {
      newText += (" X" + this.dupe)
      this.dupe++;
      stateTimeout = 0;
    } else {
      this.dupe = 2;
    }
    
    this.setState({
      buttonNum: newNum,
      rolling: true
    })
    var self = this;
    if (newNum === 1) {
      stateTimeout = 0;
      newNum = 1;
    }
    setTimeout(function () { self.setRolledRule(newNum, newText); }, stateTimeout);
  }

  setRolledRule = (newNum, newText) => {
    this.setState({
      rule: {
        num: newNum,
        text: newText
      },
      rolling: false
    });
  }

  render() {
    return (
        <Container className="App">
          <Row>
            <Col><Titlebar /></Col>
          </Row>
          <Row>
          <Col><BigRedButton num={this.state.buttonNum} onRoll={this.onRoll} formatValue={this.formatValue}/></Col>
          </Row>
          <Row>
          <Col><Rolled num={this.state.rule.num} text={this.state.rule.text} rolling={this.state.rolling}/></Col>
          </Row>
        </Container>
    );
  }
}

export default App;
