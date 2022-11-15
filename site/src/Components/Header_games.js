import React ,{ Component } from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'


export default class Header_games extends Component{
    render() {
        return(
                 <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Настолки для всех!</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link href="/sea_battles">Морской бой</Nav.Link>
                                <Nav.Link href="/sudoku">Судоку</Nav.Link>
                                <Nav.Link href="/tic-tac-toe">Крестики-нолики</Nav.Link>
                                <Nav.Link href="/checkers">Шашки</Nav.Link>
                                <Nav.Link href="/minesweaper">Сапёр</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
                
        )
    }
    
}


