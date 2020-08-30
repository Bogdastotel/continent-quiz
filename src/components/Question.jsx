import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function Question(props) {
  return (
    <Col className="text-center">
      <div>
        <h4>Question: {props.questionNumber} of 5</h4>
        <img
          src={
            imageCollection[Math.floor(Math.random() * imageCollection.length)]
          }
          alt="continent"
          className="mt-3"
          width="400"
        />
      </div>

      {/* question should go here  */}
      <p className="mt-3">{props.question.question}</p>

      <div>
        <Button
          variant="primary"
          className="mt-3"
          onClick={() => props.handleQuestion()}
        >
          Next
        </Button>
      </div>
    </Col>
  );
}

const imageCollection = [
  require("../assets/europe.jpg"),
  require("../assets/africa.jpg"),
  require("../assets/asia.jpg"),
  require("../assets/northAmerica.jpg"),
  require("../assets/southAmerica.jpg"),
  require("../assets/oceania.jpeg"),
  require("../assets/antartica.jpg"),
];

export { imageCollection, Question };
