import logo from './logo.svg';
import './App.css';
import {Row,Col,Button} from 'react-bootstrap'


import { BrowserRouter as Router, Link, NavLink, Route, Routes} from 'react-router-dom';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import {Home} from './Pages/Home';
import {Sudoku} from './Pages/Sudoku';
import {Tic_tac_toe} from './Pages/Tic-tac-toe'
import {Sea_battles} from './Pages/Sea_battles'
import {Checkers} from './Pages/Checkers'
import {Minesweaper} from './Pages/Minesweaper'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null)

    }
    
  }
  clickHandler = event => {

  }
  render(){
    return(
      <>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sudoku' element={<Sudoku/>}/>
            <Route path='/tic-tac-toe' element={<Tic_tac_toe/>}/>
            <Route path='/sea_battles' element={<Sea_battles/>}/>
            <Route path='/checkers' element={<Checkers/>}/>
            <Route path='/minesweaper' element={<Minesweaper/>}/>
          </Routes>
      </>
      );
  }
  
}

export default App;
