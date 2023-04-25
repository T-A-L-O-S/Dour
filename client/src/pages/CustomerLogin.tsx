import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export function CustomerLogin() {


    return (
        <Container fluid className="h-100 pt-4">
            <Row className="h-100 justify-content-center align-items-center">
                <Col md={6} className="bg-light p-5 rounded-lg">
                    <h2 className="text-center mb-4">Customer Login</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit" className='mt-4 mb-4'>
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
