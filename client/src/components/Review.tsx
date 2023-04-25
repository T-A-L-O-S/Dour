import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

export function Review (){
  const [reviews, setReviews] = useState([
    { name: "John", review: "This is a great product!" },
    { name: "Jane", review: "I love this product!" },
  ]);
  const [newReview, setNewReview] = useState("");

  const handleReviewChange = (event) => {
    setNewReview(event.target.value);
  };

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    setReviews([...reviews, { name: "Anonymous", review: newReview }]);
    setNewReview("");
  };

  return (
    <div>
      <h2>Product Reviews</h2>
      <Card>
        <Card.Body>
          <Form onSubmit={handleReviewSubmit}>
            <Form.Group>
              <Form.Label>Write a review:</Form.Label>
              <Form.Control
                type="text"
                value={newReview}
                onChange={handleReviewChange}
                placeholder="Enter your review here..."
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="mt-4">
        {reviews.map((review, index) => (
          <Card key={index}>
            <Card.Body>
              <Card.Title>{review.name}</Card.Title>
              <Card.Text>{review.review}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};
