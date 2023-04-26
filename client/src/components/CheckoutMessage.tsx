import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function CheckoutMessage() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Order Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Thank you for your order! Your items will be delivered soon.</p>
        <p>Please contact the vendor for any inquiries:</p>
        <ul>
          <li>Name: Hossain Sheikh Mohammad</li>
          <li>Phone: xxxx-12345-xxx</li>
          <li>Email: gmail@sheikh.com</li>
          <li style={{ color: "red" }}>Make sure to save this information for future contact!</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Link to='/'>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}