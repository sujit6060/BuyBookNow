import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Nav } from "react-bootstrap";

export default function BuyBook() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=VuTlds7uAbCSuNwf8UaeMgAUOJo8FFSc"
      )
      .then((res) => {
        setResult(res.data.results.books);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <>
      <div>
        <Card.Header
          style={{
            textAlign: "center",
            fontSize: "50px",
            fontWeight: "bolder",
          }}
        >
          <i className="fas fa-book-reader"></i> BUY_BOOK_NOW
          <i className="fas fa-book-reader"></i>
        </Card.Header>
        <Card className="container py-4 mb-2 mt-5 text-center">
          <Card.Header>Quote Of The Day</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                “Show me a family of readers, and I will show you the people who
                move the world.”
              </p>
              <footer className="blockquote-footer">
                <cite title="Source Title">Napoleon Bonaparte</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
        <Container>
          <Row md={3} className="container" style={{ paddingLeft: "50px" }}>
            {result.map((book) => (
              <>
                <Col className="py-3 mb-1 p-2" key={book.rank}>
                  <Card
                    style={{
                      width: "20rem",
                      height: "100%",
                      border: "2px solid black",
                      borderRadius: "15px",
                    }}
                    key={book.rank}
                  >
                    <Card.Img
                      variant="top"
                      height="250px"
                      style={{ borderRadius: "13px" }}
                      src={book.book_image}
                    />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>Author: {book.author}</Card.Text>
                      <Card.Text>Description: {book.description}</Card.Text>
                    </Card.Body>
                    <Row md={12} style={{ paddingLeft: "12px" }}>
                      <Col className="py-6 mb-1">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "10px",
                          }}
                        >
                          <p style={{ paddingTop: "12px" }}>
                            <i className="fas fa-upload"> </i>
                            {book.publisher}
                          </p>
                          <p style={{ paddingTop: "12px", color: "red" }}>
                            Buy Now <i className="fas fa-arrow-right"></i>
                          </p>
                          <Nav.Link
                            className="btn btn-outline-dark "
                            style={{
                              fontSize: "20px",
                              color: "black",
                              width: "50px",
                            }}
                            href={book.amazon_product_url}
                          >
                            <i className="fab fa-amazon"></i>
                          </Nav.Link>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}
