import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import HomeBanner from '../components/HomeBanner';
import ProductCollection from '../components/ProductCollection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <Container className="text-center mt-5">
      <h1 className="text-center mt-5">Bem-vindo ao Nosso E-commerce</h1>
      <p className="text-center">
        Explore nossa ampla gama de produtos e aproveite a melhor experiência de compras online.
      </p>
      <ProductCollection />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;

