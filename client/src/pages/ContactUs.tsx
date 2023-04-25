import React from 'react';
import { Container, Row, Col, Form, Button, Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faContactBook, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

export function ContactUs() {
    return (
    <Container className="py-5">
        <Row>
            <Col className="text-center my-5">
            <h1>About Us</h1>
            <p>
                At Dour, we are passionate about providing high-quality cart parts
                to our customers. We believe that everyone deserves access to the
                best products and services, which is why we work hard to ensure that
                our customers are always satisfied with their purchases.
            </p>
            </Col>
        </Row>

        <h2 className="text-center mb-5">Our Services</h2>
        
        <Row className="justify-content-center">
            <Col xs={12} md={4} className="text-center mb-4">
                <FontAwesomeIcon icon={faWrench} size="3x" className="mb-3" />
                <h4>Quality Parts</h4>
                <p>We provide high-quality car parts that will keep your vehicle running smoothly.</p>
            </Col>
            <Col xs={12} md={4} className="text-center mb-4">
                <FontAwesomeIcon icon={faContactBook} size="3x" className="mb-3" />
                <h4>Emergency Contacts</h4>
                <p>We offer Having various necessary emergency contacts so you can get help as soon as possible.</p>
            </Col>
            <Col xs={12} md={4} className="text-center mb-4">
                <FontAwesomeIcon icon={faMoneyBill} size="3x" className="mb-3" />
                <h4>Competitive Pricing</h4>
                <p>We offer competitive pricing on all our products so you can save money.</p>
            </Col>
        </Row>

        <Row className='mb-4'>
            <Col>
            <Card className="d-flex justify-content-center align-items-center mx-auto">
                <Card.Header as="h3" >Customer Side</Card.Header>
                <Card.Body>
                <Card.Text>
                    Login &rarr; Add to Cart &rarr; Checkout
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="d-flex justify-content-center align-items-center">
                <Card.Header as="h3">Vendor Side</Card.Header>
                <Card.Body>
                <Card.Text>
                    Login as vendor &rarr; Post products &rarr; Sell &rarr; Earn money
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Row>

        <Row>
            <Col md={6} pl={6}>
            <Image
                src="https://via.placeholder.com/400x400.png?text=Our+Team"
                alt="Our Team"
                className="d-block mx-auto"
                
            />
            </Col>
            <Col md={6} className="my-auto">
            <h2>Our Team</h2>
            <p>
                We are a team of experienced professionals who are committed to
                providing the best possible service to our customers. From our
                sales team to our customer support representatives, everyone at
                Dour is dedicated to helping you find the products you need and
                ensuring that you are completely satisfied with your purchase.
            </p>
            </Col>
        </Row>

        <Row className='mb-4'>
            <Col md={6} className="my-auto">
            <h2>Our Mission</h2>
            <p>
                Our mission at Dour is to provide the highest-quality cart parts to
                our customers at an affordable price. We are dedicated to ensuring
                that our customers have access to the best products and services
                available, and we strive to exceed their expectations at every
                turn.
            </p>
            </Col>
            <Col md={6}>
            <Image
                src="https://via.placeholder.com/400x400.png?text=Our+Mission"
                alt="Our Mission"
                className="d-block mx-auto"
                fluid
            />
            </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <h1 className="text-center">Contact Us</h1>
          </Col>
        </Row>
      
        <Row>
            <Col md={6} pr={6}>
            <h2>Contact Us</h2>
            <p>
                Have a question or feedback? Please fill out the form below and we'll
                get back to you as soon as possible.
            </p>
            <Form>
                <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formMessage" className="pb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
                </Form.Group>

                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
            </Col>
            <Col md={6} pl={10}>
            <h2>Address</h2>
            <p>
                Dour<br />
                Islamic University of technology<br />
                Gazipur 1704
            </p>
            <h2>Phone</h2>
            <p>(123) 456-7890</p>
            <h2>Email</h2>
            <p>dour@example.com</p>
            </Col>
        </Row>

    </Container>
);
}