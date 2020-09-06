import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import "../css/answer.css";

export default function Answers(props) {
  const [randomAnswers, setAnswers] = useState([]);

  const [buttonBgCollor, setButtonBgCollor] = useState("white");

  useEffect(() => {
    let randomAnswersExceptTheCorrectAnswer = props.continents
      .filter((continent) => continent !== props.correctAnswer)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);

    setAnswers(
      [...randomAnswersExceptTheCorrectAnswer, props.correctAnswer]
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
    );
  }, [props.questionNumber]);

  function checkAnswer(e) {
    if (e.target.value === props.correctAnswer) console.log("correct");
  }

  return (
    <Col>
      <button
        value={randomAnswers[0]}
        onClick={(e) => checkAnswer(e)}
        className="answer d-block"
      >
        {randomAnswers[0]}
      </button>
      <button
        value={randomAnswers[1]}
        onClick={(e) => checkAnswer(e)}
        className="answer d-block"
      >
        {randomAnswers[1]}
      </button>
      <button
        value={randomAnswers[2]}
        onClick={(e) => checkAnswer(e)}
        className="answer d-block"
      >
        {randomAnswers[2]}
      </button>
    </Col>
  );
}
