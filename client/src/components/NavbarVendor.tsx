import React, { useState } from 'react';

import { NavDropdown, Button, Nav, Container, Navbar as NavbarBS } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function NavbarVendor( { onLogout } ) {
    
    const [userType, setUserType] = useState('');

    const handleLogout = () => {
        //  set userType
        setUserType("base");
        onLogout(userType);
    }
    
    return (
        <NavbarBS className="bg-white shadow-sm mb-7">
            <Container>

                <Nav.Link to = "/" as = { NavLink } className="" style = {{ paddingRight: '1rem', fontSize: '2rem', color: '#ad5264', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
                    Dour
                </Nav.Link>

                <Nav className="me-auto">
                    <Nav.Link to = "/post-product" as = { NavLink }>Post Product</Nav.Link>
                    <Nav.Link to = "/contact-us" as = { NavLink }>Contact Us</Nav.Link>
                    <Nav.Link to = "/vendor-order" as = { NavLink }>Orders</Nav.Link>
                </Nav>
                <Nav style={{ paddingRight: "1rem" }} >
                    <Nav className="mt-3"> <h6 className="">Vendor Jack</h6> </Nav>
                    <Nav.Link to = "/" as = { NavLink }>
                    <Button variant="danger" onClick={handleLogout}>Logout</Button>
                    </Nav.Link>
                </Nav>
                
            </Container>
        </NavbarBS>
    )
}