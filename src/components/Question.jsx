import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Answers from "./Answers";

function Question(props) {

  const [correctAnswerGiven, setCorrectAnswer] = useState(false)

  const imageSelect = () => {
     switch(props.questionSelected.correctAnswer) {
       case 'Europe':
         return imageCollection[0]
       case 'Africa':
         return imageCollection[1]
       case 'Asia':
         return imageCollection[2]
       case 'North America':
         return imageCollection[3]
       case 'South America':
         return imageCollection[4]
       case 'Oceania':
         return imageCollection[5]
       case 'Antarctica':
         return imageCollection[6]
        default: return imageCollection[0]
     }
  }


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
            src={imageSelect()}
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
