import React from 'react';
import './App.css';
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function App() {
  return (
        
          <Container >
            <Row><h5>CONTINENT QUIZ</h5></Row>
            <Row> 
              <Home /> 
            </Row>
                 
          </Container>
        
  );
}

export default App;
