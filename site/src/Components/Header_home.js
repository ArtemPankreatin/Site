import React ,{ Component } from 'react'
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'


export default class Header_home extends Component{
    render() {
        return(
                 <Navbar collapseOnSelect bg="dark" expand="md" variant="dark" fixed='top'>
                    <Container>
                        <Navbar.Brand href="/">Настолки для всех!</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <button className='login_button'>Log In</button>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
                
        )
    }
    
}


