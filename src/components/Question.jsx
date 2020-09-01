import React, {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Answers from './Answers'

function Question(props) {



  let [randomAnswers, setAnswers] = useState(props.continents.filter(continent => continent !== props.questionSelected.correctAnswer).sort(() => 0.5 - Math.random())
  .slice(0, 2))



  useEffect(() => {
      setAnswers = props.continents.filter(continent => continent !== props.questionSelected.correctAnswer).sort(() => 0.5 - Math.random())
      .slice(0, 2)
  },[randomAnswers]);


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

      <p className="mt-3">{props.questionSelected.question}</p>

      <Answers correctAnswer={props.questionSelected.correctAnswer} answers={randomAnswers} />
          
      
      

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
