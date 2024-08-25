import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Nav } from "react-bootstrap";

export default function BuyBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=VuTlds7uAbCSuNwf8UaeMgAUOJo8FFSc"
        );
        setBooks(response.data.results.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <Container>
        <h1 className="text-center font-weight-bold my-4">
          <img
            src="https://img.icons8.com/fluency/48/000000/book.png"
            alt="Book Icon"
          />{" "}
          BuyBookNow{" "}
          <img
            src="https://img.icons8.com/fluency/48/000000/book.png"
            alt="Book Icon"
          />
        </h1>
        <Row md={3} className="mt-5">
          {books.map((book) => (
            <Col key={book.rank} className="mb-4">
              <Card
                style={{
                  width: "18rem",
                  height: "100%",
                  border: "2px solid #D0D0D0",
                  borderRadius: "10px",
                }}
              >
                <Card.Img
                  variant="top"
                  height="250px"
                  src={book.book_image}
                  alt={book.title}
                />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>Author: {book.author}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex justify-content-between align-items-center">
                    <span style={{ color: "red" }}>
                      Buy Now <i className="fas fa-arrow-right"></i>
                    </span>
                    <Nav.Link
                      className="btn btn-outline-dark"
                      style={{ fontSize: "20px", width: "50px" }}
                      href={book.amazon_product_url}
                    >
                      <i className="fab fa-amazon"></i>
                    </Nav.Link>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
