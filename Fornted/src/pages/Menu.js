import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import products from './products'; // Import the list of products

const Menu = () => {
    return (
        <Container className="mt-4">
            <Row>
                {products.map(product => (
                    <Col key={product.id} md={4} className="mb-4">
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

const ProductCard = ({ product }) => {
    return (
        <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Description: {product.description}</Card.Text>
                <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
                <Link to={`/product/${product.id}`}>
                    <Button variant="primary">View Details</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Menu;
