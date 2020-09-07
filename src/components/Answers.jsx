import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import "../css/answer.css";

export default function Answers(props) {
  const [randomAnswers, setAnswers] = useState([]);

  const [isCorrectAnswer, setCorrectAnswer] = useState({
    answerOne: false,
    answerTwo: false,
    answerThree: false
  }
)


  useEffect(() => {
    setCorrectAnswer({    
      answerOne: false,
      answerTwo: false,
      answerThree: false})
    
  }, [props.questionNumber])

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
    if (e.target.value === props.correctAnswer) setCorrectAnswer({...isCorrectAnswer, [e.target.name]: true});
  }

  return (
    <Col>
      <button
        name={'answerOne'}
        value={randomAnswers[0]}
        onClick={(e) => checkAnswer(e)}
        className={isCorrectAnswer.answerOne ? 'correctAnswer' : 'answer'}
      >
        {randomAnswers[0]}
      </button>
      <button
        name={'answerTwo'}
        value={randomAnswers[1]}
        onClick={(e) => checkAnswer(e)}
        className={isCorrectAnswer.answerTwo ? 'correctAnswer' : 'answer'}
      >
        {randomAnswers[1]}
      </button>
      <button
        name={'answerThree'}
        value={randomAnswers[2]}
        onClick={(e) => checkAnswer(e)}
        className={isCorrectAnswer.answerThree ? 'correctAnswer' : 'answer'}
      >
        {randomAnswers[2]}
      </button>
    </Col>
  );
}
