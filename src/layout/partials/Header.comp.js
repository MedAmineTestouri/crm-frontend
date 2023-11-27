import { React } from "react";
import {useNavigate  } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import {Navbar , Nav} from 'react-bootstrap'
import  logo  from "../../assets/img/logo.png";

export const Header = () => {
    const history = useNavigate()
    const LogMeOut = ()=> {
            history('/')
    }
    return (
        <Navbar
        collapseOnSelect
        variant="dark"
        bg="info"
        expand="md">
           <Navbar.Brand>
            <img src={logo} alt="logo" width="50px"/>
           </Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {/* <Nav.Link href="/dashboard">
                            Dashboard
                    </Nav.Link>
                    <Nav.Link href="/dashboard">
                            Tickets
                    </Nav.Link>
                    <Nav.Link href="/dashboard">
                            Logout
                    </Nav.Link> */}
                    <LinkContainer to="dash"><Nav.Link >Dashboard</Nav.Link></LinkContainer>
                    <LinkContainer  to="list-tick"><Nav.Link>Tickets</Nav.Link></LinkContainer>
                    <Nav.Link onClick={LogMeOut}>Logout</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>

            
           
        </Navbar>
    )
}