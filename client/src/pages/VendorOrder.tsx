import React, { useState } from "react";
import { Container, ListGroup } from "react-bootstrap";

const ordersData = [
    {
        id: 1,
        customerName: "Shojeb",
        items: [
            { name: "Product 1", quantity: 2, price: 10 },
            { name: "Product 2", quantity: 1, price: 20 },
        ],
        deliveryAddress: "123 kolemeshori road, CHIPA Gazipur",
        contactInfo: "123-456-7890",
        email: "shojeb@example.com",
        total: 40,
    },
    {
        id: 2,
        customerName: "Faiyaz Karim",
        items: [{ name: "Product 3", quantity: 3, price: 15 }],
        deliveryAddress: "456 Bashundhara, Dhanmondhi Dhaka",
        contactInfo: "098-765-4321",
        email: "faiyaz@example.com",
        total: 45,
    },
];

const OrderList = ({ orders, onItemClick }) => {
    return (
        <ListGroup>
            {orders.map((order) => (
                <ListGroup.Item
                    key={order.id}
                    action
                    onClick={() => onItemClick(order)}
                >
                    Order #{order.id} - Total: ${order.total}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

const OrderDetail = ({ order }) => {
    return (
        <Container>
            <h2>Order #{order.id}</h2>
            <p style={{ fontSize: '1.2rem' }}> <strong>Customer:</strong>  {order.customerName}</p>
            <p style={{ fontSize: '1.2rem' }}> <strong>Delivery Address:</strong>  {order.deliveryAddress}</p>
            <p style={{ fontSize: '1.2rem' }}> <strong>Contact Info:</strong>  {order.contactInfo}</p>
            <p style={{ fontSize: '1.2rem' }}> <strong>Email:</strong>  {order.email}</p>
            <h3 className="pt-3">Order Items:</h3>
            <ListGroup className="pb-4">
                {order.items.map((item) => (
                    <ListGroup.Item key={item.name}>
                        {item.name} - Quantity: {item.quantity} - Price: ${item.price}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <p style={{ fontSize: '2rem' }}> <strong>Total:</strong>  ${order.total}</p>
        </Container>
    );
};

const VendorOrder = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleOrderClick = (order) => {
        setSelectedOrder(order);
    };

    return (
        <Container>
            <h1 className="d-flex justify-content-center align-items-center pt-4 pb-4" style={{ fontSize: '2.5rem', color: '#ad5264', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
                Welcome to Dour Vendor
            </h1>
            <h3>Below are list of order that need to completed</h3>
            <h1 className="pt-2 pb-5">Vendor Orders</h1>
            {selectedOrder ? (
                <OrderDetail order={selectedOrder} />
            ) : (
                <OrderList orders={ordersData} onItemClick={handleOrderClick} />
            )}
        </Container>
    );
};

export default VendorOrder;
