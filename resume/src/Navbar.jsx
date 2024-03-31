import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const MyNavbar = () => {
  return (
    <Navbar className='bg-gray-500 flex ' bg="dark" variant="dark">
      <Container className='flex justify-content'>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto ">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
