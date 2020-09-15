import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Answers from "./Answers";

function Question(props) {

  const [correctAnswerGiven, setCorrectAnswer] = useState(false)


  useEffect(() => {
    setCorrectAnswer(false)
  }, [props.questionNumber])

  function handleAnswer() {
    setCorrectAnswer(true)
  }
 
  return (
    <>
      <Col className="text-center">
        <div>
          <h4>Question: {props.questionNumber} of 5</h4>
          <img
            src={
              imageCollection[
                Math.floor(Math.random() * imageCollection.length)
              ]
            }
            alt="continent"
            width="400"
            className="mt-3  border border-info"
          />
        </div>

        <p className="mt-3">{props.questionSelected.question}</p>

        <Answers
          correctAnswer={props.questionSelected.correctAnswer}
          continents={props.continents}
          questionNumber={props.questionNumber}
          handleAnswer={handleAnswer}
        />

        <div>
          <Button
            variant="primary"
            className="mt-3"
            onClick={() => props.handleQuestion(correctAnswerGiven)}
          >
            Next
          </Button>
        </div>
      </Col>
    </>
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
