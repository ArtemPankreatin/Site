import React, { Component } from "react"
import {Row,Col, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'
import Header_home from '../Components/Header_home'
import Footer from "../Components/Footer";

import telegram_logo from '../images/telegram_logo.png'


const Home = () =>{
    return(
        <>
        <Header_home/>
        <div className="home_screen">
                    <nav>
                <h4>Выберите игру</h4>
                    <Row>
                    <Col>
                        <a
                        href="/sudoku"
                        
                        className='button-home'
                        textAlign='middle'>Судоку</a>
                    </Col>
                    <Col>
                        <a 
                        href="/tic-tac-toe"
                        className='button-home'
                        textAlign='middle'>Крестики-Нолики</a>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <a 
                        href="/sea_battles"
                        className='button-home'
                        textAlign='middle'>Морской бой</a>
                    </Col>
                    <Col>
                        <a 
                        href="/checkers"
                        className='button-home'
                        textAlign='middle'>Шашки</a>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <a 
                        href="/minesweaper"
                        className='button-home'
                        textAlign='middle'>Сапёр</a>
                    </Col>
                    </Row>
                    </nav>
        </div>
        <Footer/>
    </>
    )

}
export {Home}

