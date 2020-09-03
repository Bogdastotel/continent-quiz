import React, { useState, useEffect } from "react";
import "../css/answer.css";

export default function Answers(props) {
  const [randomAnswers, setAnswers] = useState([]);

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

  function checkAnswer(event) {
    if (event === props.correctAnswer) console.log("correct");
  }

  return (
    <>
      <button
        value={randomAnswers[0]}
        onClick={(e) => checkAnswer(e.target.value)}
        className="answer"
      >
        {randomAnswers[0]}
      </button>
      <button
        value={randomAnswers[1]}
        onClick={(e) => checkAnswer(e.target.value)}
        className="answer"
      >
        {randomAnswers[1]}
      </button>
      <button
        value={randomAnswers[2]}
        onClick={(e) => checkAnswer(e.target.value)}
        className="answer"
      >
        {randomAnswers[2]}
      </button>
    </>
  );
}
