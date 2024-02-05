import React from "react";
import "./ThirdSection.css";
import { Card } from "react-bootstrap";
function Cards() {
  return (
    <div className="thirdCards">
      <Card
        className="card"
        style={{
          backgroundColor: "rgb(236, 244, 244)",
          width: "250px",
          height: "350px",
          marginTop: "4%",
        }}
      >
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title> Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        className="card"
        style={{
          backgroundColor: "rgb(236, 244, 244)",
          width: "250px",
          height: "350px",
          marginTop: "4%",
        }}
      >
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title> Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        className="card"
        style={{
          backgroundColor: "rgb(236, 244, 244)",
          width: "250px",
          height: "350px",
          marginTop: "4%",
        }}
      >
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title> Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
