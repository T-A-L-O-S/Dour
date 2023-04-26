import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { CheckoutMessage } from "../components/CheckoutMessage";



export function CheckoutForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zip: "",
        country: "",
    });

    const handleChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }));
    };

    const [showComponent, setShowComponent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission logic here
      };

  const showCheckoutMessage = () => {
    setShowComponent(true)
}

    return (
        <div className="justify-content-center align-items-center pt-5">
            <div className="p-5 rounded shadow justify-content-center align-items-center">
                <h3 className="text-center mb-4">Checkout</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                        />
                    </Form.Group>

                    <Form.Group controlId="formPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                        />
                    </Form.Group>

                    <Form.Group controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter your address"
                        />
                    </Form.Group>

                    <Form.Group controlId="formCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Enter your city"
                        />
                    </Form.Group>

                    <Form.Group controlId="formZip">
                        <Form.Label>Zip code</Form.Label>
                        <Form.Control
                            type="text"
                            name="zip"
                            value={formData.zip}
                            onChange={handleChange}
                            placeholder="Enter your zip code"
                        />
                    </Form.Group>

                    <Form.Group controlId="formCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Enter your country"
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-3" onClick={showCheckoutMessage}>
                        Place order
                    </Button>

                    {showComponent && <CheckoutMessage />}

                </Form>
            </div>
        </div>

    );
};
