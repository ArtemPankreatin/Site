import React ,{ Component } from 'react'
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import App from '../App'


export default class Header_home extends Component{
    render() {
        console.log(App.name)
        return(
            <>
                 <Navbar collapseOnSelect bg="dark" expand="md" variant="dark" fixed='top'>
                    <Container>
                        <Navbar.Brand href="/">Настолки для всех!</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <div style={{marginLeft: "87%", display: "flex"}}>
                                
                                <a href="/login" className='login_button'>Log In</a>
                                <a href="/register" className='login_button'>Sign In</a>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
                    </>  
        )
    }
    
}


