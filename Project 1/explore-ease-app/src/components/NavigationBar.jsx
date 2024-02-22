import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from "react-router-dom";
import img from "../media/Logo.jpg";

export function NavigationBar() {

    const navigate = useNavigate();
    const [status, setStatus] = useState(false); // Initialize status to false

    const handleLogout = () => {
        sessionStorage.clear();

        navigate(`/`);

    };

    useEffect(() => {
        const id = sessionStorage.getItem("id");
        const ownerId = sessionStorage.getItem("owner-id");
        const serviceId = sessionStorage.getItem("service-id")
        const hostId = sessionStorage.getItem("host-id")
        if (id !== null || ownerId !== null || serviceId !== null || hostId !== null) {
            setStatus(true); // Set status to true if both id and owner-id are present
        } else {
            setStatus(false); // Set status to false if either id or owner-id is missing
        }
    }, []);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <LinkContainer to="/">
                    <Nav.Link className="hover-effect">
                        <img src={img} alt="logo" height="70px" />
                    </Nav.Link>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
                    </Nav>
                    {!status && (
                    <Nav>
                        <NavDropdown title="Login" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/login-user">User</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/login-owner">Agent</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/login-service">Service</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/login-host">Admin</NavDropdown.Item>


                        </NavDropdown>
                        <NavDropdown title="Register" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/registrationuser">User</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/registrationowner">Agent</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/registrationserviceprovider">Service Provider</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                    )}
                    {/* <Nav className="mr-auto">
                        <Nav.Link href="#serviceview">Service View</Nav.Link>
                    </Nav> */}

                    <Nav>
                        {status && (
                            <Button variant="light" onClick={handleLogout}>
                                Logout
                            </Button>
                        )}
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

