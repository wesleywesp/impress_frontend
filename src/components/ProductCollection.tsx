import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const products = [
  { id: 1, name: 'Smartphone', price: 499.99, imageUrl: '/images/smartphone.jpg' },
  { id: 2, name: 'Tablet', price: 299.99, imageUrl: '/images/tablet.jpg' },
  { id: 3, name: 'Camiseta', price: 19.99, imageUrl: '/images/tshirt.jpg' },
  { id: 4, name: 'Calça Jeans', price: 49.99, imageUrl: '/images/jeans.jpg' },
  { id: 5, name: 'Tênis', price: 89.99, imageUrl: '/images/shoes.jpg' },
  { id: 6, name: 'Relógio', price: 199.99, imageUrl: '/images/watch.jpg' },
];

const ProductCollection: React.FC = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Produtos em Destaque</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} sm={6} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={product.imageUrl}
                alt={product.name}
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Preço: €{product.price.toFixed(2)}</Card.Text>
                <Button variant="primary" href={`/products/${product.id}`}>
                  Ver Mais
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductCollection;
