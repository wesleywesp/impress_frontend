import React from 'react';
import { Carousel } from 'react-bootstrap';

// Importando as imagens locais
import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.png';

const HomeBanner: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1} // Imagem local
          alt="Primeiro slide"
        />
        <Carousel.Caption>
          <h3>Oferta Exclusiva</h3>
          <p>Descontos incríveis para você!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2} // Imagem local
          alt="Segundo slide"
        />
        <Carousel.Caption>
          <h3>Novos Produtos</h3>
          <p>Confira nossas novidades!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3} // Imagem local
          alt="Terceiro slide"
        />
        <Carousel.Caption>
          <h3>Frete Grátis</h3>
          <p>Frete grátis em compras acima de €50!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeBanner;

