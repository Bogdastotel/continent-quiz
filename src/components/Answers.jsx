import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import "../css/answer.css";

export default function Answers(props) {
  const [randomAnswers, setAnswers] = useState([]);

  const [isCorrectAnswer, setCorrectAnswer] = useState({
    answerOne: false,
    answerTwo: false,
    answerThree: false,
  });


  const [wrongAnswers, setWrongAnswers] = useState({
    answerOne: false,
    answerTwo: false,
    answerThree: false,
  })

  useEffect(() => {
    setWrongAnswers({
      answerOne: false,
      answerTwo: false,
      answerThree: false,
    })
  }, [props.questionNumber])

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

    if (e.target.value === props.correctAnswer)
      setCorrectAnswer({ ...isCorrectAnswer, [e.target.name]: true });
    else {
      answers.map((answer) => {
        if (answer.props.value === props.correctAnswer) {
          setCorrectAnswer({ ...isCorrectAnswer, [answer.props.name]: true });
        }
        setWrongAnswers({
          ...wrongAnswers, [e.target.name]: true
        })
        // e.target.style.backgroundColor = "red";
        // console.log(answer.props.value);
      });
    }

  }

  let answers = [
    <button
      name={"answerOne"}
      value={randomAnswers[0]}
      onClick={(e) => checkAnswer(e)}
      className={isCorrectAnswer.answerOne ? "correctAnswer" : wrongAnswers.answerOne ? "wrongAnswer" : "answer"}
    >
      {randomAnswers[0]}
    </button>,
    <button
      name={"answerTwo"}
      value={randomAnswers[1]}
      onClick={(e) => checkAnswer(e)}
      className={isCorrectAnswer.answerTwo ? "correctAnswer" : wrongAnswers.answerTwo ? "wrongAnswer" : "answer"}
    >
      {randomAnswers[1]}
    </button>,
    <button
      name={"answerThree"}
      value={randomAnswers[2]}
      onClick={(e) => checkAnswer(e)}
      className={isCorrectAnswer.answerThree ? "correctAnswer" : wrongAnswers.answerThree ? "wrongAnswer" : "answer"}
    >
      {randomAnswers[2]}
    </button>,
  ];

  return (
    <Col>
      {answers[0]}
      {answers[1]}
      {answers[2]}
    </Col>
  );
}
