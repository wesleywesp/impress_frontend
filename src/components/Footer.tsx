import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  const startYear = 2023; // Ano de início
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light text-center text-lg-start mt-5 border-top">
      <Container className="py-4">
        <Row>
          <Col md={4} className="mb-3">
            <h5>Sobre Nós</h5>
            <p>
              Nosso e-commerce oferece os melhores produtos a preços acessíveis. Garantimos qualidade
              e entrega rápida!
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contato</h5>
            <p>Email: contato@meuecommerce.com</p>
            <p>Telefone: +351 123 456 789</p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Links Úteis</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-decoration-none">
                  Início
                </a>
              </li>
              <li>
                <a href="/products" className="text-decoration-none">
                  Produtos
                </a>
              </li>
              <li>
                <a href="/about" className="text-decoration-none">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/contact" className="text-decoration-none">
                  Contato
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="bg-dark text-white py-3">
        <p className="mb-0">
          &copy; {startYear === currentYear ? currentYear : `${startYear} - ${currentYear}`} Meu
          E-commerce. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
