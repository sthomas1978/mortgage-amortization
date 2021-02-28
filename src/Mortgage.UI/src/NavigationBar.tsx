import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const NavigationBar = () => {
    return (
        <Navbar>
            <Navbar.Brand>House Finance Tools</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/mortgage-amortization">Amortization Calculator</Nav.Link>
                <Nav.Link as={Link} to="/house-prices">House Price Data</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar