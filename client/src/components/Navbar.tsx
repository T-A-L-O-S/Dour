import { NavDropdown, Button, Nav, Container, Navbar as NavbarBS } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Navbar() {
    
    const {
        cartQuantity,
        openCart,
    } = useShoppingCart()
    
    return (
        <NavbarBS className="bg-white shadow-sm mb-7">
            <Container>

                <Nav.Link to = "/" as = { NavLink } className="" style = {{ paddingRight: '1rem', fontSize: '2rem', color: '#ad5264', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
                    Dour
                </Nav.Link>

                <Nav className="me-auto">
                    <Nav.Link to = "/contact-us" as = { NavLink }>Contact Us</Nav.Link>
                </Nav>
                <Nav style={{ paddingRight: "1rem" }} >
                    <Nav.Link to = "/login-choice" as = { NavLink }>
                    <Button variant="primary">Login</Button>
                    </Nav.Link>
                    <Nav.Link to = "/registration-page" as = { NavLink }>
                        <Button variant="outline-success">Sign Up</Button>
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarBS>
    )
}