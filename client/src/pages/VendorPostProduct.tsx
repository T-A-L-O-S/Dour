import { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

export function VendorPostProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <Container fluid className="h-100 pt-4">
            <div>
            <h4 className="d-flex justify-content-center align-items-center pt-4"
                style={{ fontSize: '5rem', color: '#ad5264', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}
            >
                Welcome to Dour
            </h4>
                <h3 className="d-flex justify-content-center align-items-center pt-4 pb-4">Post your product here to start selling.</h3>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="productName">
                                        <Form.Label>Product Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter product name" value={name} onChange={(e) => setName(e.target.value)} required />
                                    </Form.Group>

                                    <Form.Group controlId="productPrice">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="number" placeholder="Enter product price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                                    </Form.Group>

                                    <Form.Group controlId="productCategory">
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control type="text" placeholder="Enter product category" value={category} onChange={(e) => setCategory(e.target.value)} required />
                                    </Form.Group>

                                    <Form.Group controlId="productDescription">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Enter product description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                                    </Form.Group>

                                    <Form.Group controlId="productImage">
                                        <Form.Label>Image</Form.Label>
                                        <Form.Control type="text" placeholder="Enter product image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className='mt-4'>
                                        Post Product
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>

                    </Col>

                </Row>

            </div>
        </Container>
    )
}