import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import "../css/answer.css";

export default function Answers(props) {
  const [randomAnswers, setAnswers] = useState([]);
  const [answerGiven, setAnswerGiven] = useState(false)

  const [correctAnswers, setCorrectAnswer] = useState({
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
      setAnswerGiven(false)
  }, [props.questionNumber])


  useEffect(() => {
    setCorrectAnswer({
      answerOne: false,
      answerTwo: false,
      answerThree: false})  
  }, [props.questionNumber])

  useEffect(() => {
    setWrongAnswers({
      answerOne: false,
      answerTwo: false,
      answerThree: false,
    })
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

    setAnswerGiven(true)

    if(!answerGiven) {
      if (e.target.value === props.correctAnswer) {
        setCorrectAnswer({ ...correctAnswers, [e.target.name]: true });
        props.handleAnswer()
       
      }
      else {
        answers.map((answer) => {
          if (answer.props.value === props.correctAnswer) {
            setCorrectAnswer({ ...correctAnswers, [answer.props.name]: true });
          }
          setWrongAnswers({
            ...wrongAnswers, [e.target.name]: true
          })
        });
      }
    }
  }

  let answers = [
    <button
      name={"answerOne"}
      value={randomAnswers[0]}
      onClick={(e) => checkAnswer(e)}
      className={correctAnswers.answerOne ? "correctAnswer" : wrongAnswers.answerOne ? "wrongAnswer" : "answer"}
    >
      {randomAnswers[0]}
    </button>,
    <button
      name={"answerTwo"}
      value={randomAnswers[1]}
      onClick={(e) => checkAnswer(e)}
      className={correctAnswers.answerTwo ? "correctAnswer" : wrongAnswers.answerTwo ? "wrongAnswer" : "answer"}
    >
      {randomAnswers[1]}
    </button>,
    <button
      name={"answerThree"}
      value={randomAnswers[2]}
      onClick={(e) => checkAnswer(e)}
      className={correctAnswers.answerThree ? "correctAnswer" : wrongAnswers.answerThree ? "wrongAnswer" : "answer"}
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
