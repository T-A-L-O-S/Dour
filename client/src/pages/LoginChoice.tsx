import React from "react";
import { Container, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export function LoginChoice() {
    return (
        <Container>
            <h1 className="d-flex justify-content-center align-items-center pt-4"
                style={{ fontSize: '5rem', color: '#ad5264', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}
            >
                Welcome to Dour
            </h1>
            <h3 className="d-flex justify-content-center align-items-center pt-4 pb-4">Please select your account type to login</h3>

            <div className="d-flex justify-content-center align-items-center">
                <Col lg={5}>
                    <Link to="/customer-login">
                        <Button variant="primary" size="lg" className="w-100 mt-4 mb-4">
                            Customer
                        </Button>
                    </Link>
                </Col>

                <Col lg={2}>
                    <span style={{ color: '#999', margin: '0 10px' }}></span>
                </Col>

                <Col lg={5}>
                <Link to="/vendor-login">
                        <Button variant="secondary" size="lg" className="w-100 mt-4 mb-4">
                            Vendor
                        </Button>
                    </Link>
                </Col>

            </div>
        </Container>
    );
};

