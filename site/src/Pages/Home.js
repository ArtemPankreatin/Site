import React, { Component } from "react"
import {Row,Col, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'


const Home = () =>{
    return(
        <>
        <div className="home_screen">
                    <nav>
                <h4>Выберите игру</h4>
                    <Row>
                    <Col>
                        <Button
                        href="/sudoku"
                        className='button'
                        textAlign='middle'>Cудоку</Button>
                    </Col>
                    <Col>
                        <Button 
                        href="/tic-tac-toe"
                        className='button'
                        textAlign='middle'>Крестики-Нолики</Button>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Button 
                        href="/sea_battles"
                        className='button'
                        textAlign='middle'>Морской бой</Button>
                    </Col>
                    <Col>
                        <Button 
                        href="/checkers"
                        className='button'
                        textAlign='middle'>Шашки</Button>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Button 
                        href="/minesweaper"
                        className='button'
                        textAlign='middle'>Сапёр</Button>
                    </Col>
                    </Row>
                    </nav>
    </div>
    </>
    )

}
export {Home}