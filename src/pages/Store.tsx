import { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import header from "../images/header.jpg";

export function Store() {
  const [items, setItem] = useState<
    { id: number; title: string; price: number; image: string }[]
  >([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setItem(json));
  }, []);

  return (
    <>
      <Card className="card m-2" style={{ height: "40vh" }}>
        <Card.Img
          className="opacity-55"
          variant="top"
          src={header}
          style={{ objectFit: "cover", height: "40vh" }}
        />
        <Card.Body className="d-flex">
          <div className="card-img-overlay align-self-center">
            <h1 className="card-title text-center fw-bold text-dark ">
              Shop 'til You Drop!
            </h1>
          </div>
        </Card.Body>
      </Card>
      <Row md={2} xs={1} lg={3} className="g-3">
        {items.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
