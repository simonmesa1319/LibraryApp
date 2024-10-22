import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-transparent-tertiary">
      <Container>
        <Link to="/" className="navbar-brand text-white">
          LibraryApp
        </Link>
        <Nav className="me-auto">
          <Link to="/aboutus" className="nav-link text-white">
            Sobre Nosotros
          </Link>
          <Link to="/info" className="nav-link text-white">
            Información
          </Link>
        </Nav>
        <Nav>
          <Link to="/login" className="nav-link text-white">
            Iniciar
          </Link>
          <Link to="/register" className="nav-link text-white">
            Registro
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;