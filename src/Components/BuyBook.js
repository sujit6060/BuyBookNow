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
      <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
        <Container>
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            <img src="https://img.icons8.com/fluency/48/000000/book.png" />{" "}
            BuyBookNow{" "}
            <img src="https://img.icons8.com/fluency/48/000000/book.png" />
          </h1>
          <Row md={3} className="container" style={{ marginTop: "50px" }}>
            {result.map((book) => (
              <>
                <div style={{ paddingLeft: "3px" }}>
                  <Col
                    sm
                    className="container mb-4 py-2 p-4 "
                    style={{ height: "100%" }}
                    key={book.rank}
                  >
                    <Card
                      style={{
                        width: "18rem",
                        height: "100%",
                        border: "2px solid #D0D0D0",
                        borderRadius: "10px",
                      }}
                      key={book.rank}
                    >
                      <Card.Img
                        variant="top"
                        height="250px"
                        src={book.book_image}
                      />
                      <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>Author: {book.author}</Card.Text>
                        {/* <Card.Text>Description: {book.description}</Card.Text> */}
                      </Card.Body>
                      <Row md={12} className="container">
                        <Col className="container mb-1">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <p style={{ color: "red", paddingTop: "10px" }}>
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
                </div>
              </>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}
