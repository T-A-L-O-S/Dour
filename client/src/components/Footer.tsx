import { Container, Row, Col } from 'react-bootstrap';

export function Footer() {
  return (
    <Container fluid className="text-light pt-5 pb-3" style={{ backgroundColor: '#AD5241', bottom: '0'}}>
      <Container>
        <Row>
          <Col md={3}>
            <h5>About Us</h5>
            <p> 
                An e-commerce platform dedicated to providing high-quality car parts for all your vehicle needs!            </p>
          </Col>
          <Col md={3}>
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li>Interior</li>
              <li>Engine Parts</li>
              <li>Cleaning Supplies</li>
              <li>Accessories</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Islamic University of technology</li>
              <li>Gazipur 1704</li>
              <li>(123) 456-7890</li>
              <li>dour@example.com</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Subscribe to Our Newsletter</h5>
            <p>Stay up-to-date with the latest news and promotions</p>
            <form>
              <div className="form-group pb-2">
                <input type="email" className="form-control" placeholder="Email Address" />
              </div>
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row className="justify-content-between align-items-center">
          <Col md={6} className="text-center text-md-left">
            <p>&copy; 2023 Dour. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-right">
            <ul className="list-unstyled list-inline" >
              <li className="list-inline-item"><a href="#" style={{ color: '#000000' }}>Terms and Conditions</a></li>
              <li className="list-inline-item"><a href="#" style={{ color: '#000000' }}>Privacy Policy</a></li>
              <li className="list-inline-item"><a href="#" style={{ color: '#000000' }}>Cookie Policy</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
