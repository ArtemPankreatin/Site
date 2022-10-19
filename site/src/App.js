import logo from './logo.svg';
import './App.css';
import {Row,Col, Button} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return(
  <>
  <h4>Выберите игру</h4>
    <div style={{ display: 'block', width: 'auto', height: 'auto', padding: 30, justifyContent: 'center', backgroundColor: '#F4FAAF', textAlign: 'center' }}>
                 <h4>Выберите игру</h4>
             <Row>
                 <Col>
                   <button className='button'>Судоку</button>
                 </Col>
                 <Col>
                   <button className='button'>Крестики-Нолики</button>
                 </Col>
             </Row>
             <Row>
                     <Col>
                         <button className='button'>Морской бой</button>
                     </Col>
                     <Col>
                         <button className='button'>Шашки</button>
                     </Col>
                 </Row><Row>
                     <Col>
                         <button className='button'>Сапёр</button>
                     </Col>
                 </Row>
             </div>
  </>
    

  );
}

export default App;
