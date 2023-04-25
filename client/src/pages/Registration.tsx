import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, FormCheck } from 'react-bootstrap';

export function Registration() {
    const [isCustomer, setIsCustomer] = useState(true);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSliderChange = () => {
        setIsCustomer(!isCustomer);
    };

    return (
        <Container className="pt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">{isCustomer ? 'Customer Registration' : 'Vendor Registration'}</h2>
                            <Form>
                                <Form.Group id="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="name" required value={name} onChange={(event) => setName(event.target.value)}/>
                                </Form.Group>

                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" required value={email} onChange={(event) => setEmail(event.target.value)}/>
                                </Form.Group>

                                <Form.Group id="phone">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" required value={phone} onChange={(event) => setPhone(event.target.value)}/>
                                </Form.Group>

                                <Form.Group id="address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" required value={address} onChange={(event) => setAddress(event.target.value)}/>
                                </Form.Group>

                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" required value={password} onChange={(event) => setPassword(event.target.value)}/>
                                </Form.Group>

                                <Form.Group id="password-confirm">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" required value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}/>
                                </Form.Group>
                                
                                <FormCheck
                                    type="switch"
                                    id="slider"
                                    label={isCustomer ? 'Are you a vendor? Click to register as a vendor.' : 'Are you a customer? Click to register as a customer.'}
                                    onChange={handleSliderChange}
                                    checked={isCustomer}
                                />
                                <Button className="w-100 mt-3" type="submit">{isCustomer ? 'Register as Customer' : 'Register as Vendor'}</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
} 