import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function CustomerLogin( { onLogin } ) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [userType, setUserType] = useState('');

    const handleLogin = () => {
        // validate user credentials and set userType
        setUserType("customer");
        onLogin(userType);
      }

    return (
        <Container fluid className="h-100 pt-4">
            <Row className="h-100 justify-content-center align-items-center">
                <Col md={6} className="bg-light p-5 rounded-lg">
                    <h2 className="text-center mb-4">Customer Login</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"  value={email} onChange={(event) => setEmail(event.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                        </Form.Group>

                        <Link to="/">
                            <Button variant="primary" type="submit" className='mt-4 mb-4' onClick={handleLogin}>
                                Login
                            </Button>
                        </Link>
                        
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
