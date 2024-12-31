import React from 'react';
import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa'; // Ícones do React Icons
import { NavLink } from 'react-router-dom';
import './shared/Navbar.css'; // Adicionar estilos personalizados

const AppNavbar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products">
              Produtos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              Sobre
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Nav className="d-flex align-items-center position-relative">
            <Nav.Link as={NavLink} to="/cart" className="position-relative me-3">
              <FaShoppingCart size={24} />
              <span className="badge bg-danger text-white position-absolute badge-adjust">
                0
              </span>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/profile">
              <FaUser size={24} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;



