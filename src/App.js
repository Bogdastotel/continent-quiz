import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Question } from "./components/Question";

function App() {
  const [questionNumber, setQuestionNumber] = useState(0);

  let [startButtonPressed, setStartButton] = useState(false);

  let questions = [
    {
      id: 1,
      question: "Where is the Eiphels tower located?",
      correctAnswer: "Europe",
    },
    {
      id: 2,
      question: "Where is the Great wall of China located?",
      correctAnswer: "Asia",
    },
    {
      id: 3,
      question: "Where is the Sidney city located?",
      correctAnswer: "Oceania",
    },
    {
      id: 4,
      question: "Where is the New York city located?",
      correctAnswer: "North America",
    },
    {
      id: 5,
      question: "Where is the Rio de Janeiro located?",
      correctAnswer: "South America",
    },
    {
      id: 6,
      question: "Where are the great piramids of Egypt located?",
      correctAnswer: "Africa",
    },
    {
      id: 7,
      question: "What is the southernmost located continent?",
      correctAnswer: "Antarctica",
    },
  ];

  let [selectedQuestions, setSelectedQuestions] = useState(questions);

  useEffect(() => {
    setSelectedQuestions = questions
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
  }, []);

  const continents = [
    "Africa",
    "Asia",
    "Europe",
    "South America",
    "North America",
    "Antarctica",
    "Oceania",
  ];

  // function getRandomQuestion() {}

  function renderScreen() {
    switch (questionNumber) {
      case 0:
        return <Home startQuiz={startQuiz} />;
      case 1:
        return (
          <Question
            question={selectedQuestions[0]}
            handleQuestion={handleQuestion}
            questionNumber={questionNumber}
          />
        );
      case 2:
        return (
          <Question
            question={selectedQuestions[1]}
            handleQuestion={handleQuestion}
            questionNumber={questionNumber}
          />
        );
      case 3:
        return (
          <Question
            question={selectedQuestions[2]}
            handleQuestion={handleQuestion}
            questionNumber={questionNumber}
          />
        );
      case 4:
        return (
          <Question
            question={selectedQuestions[3]}
            handleQuestion={handleQuestion}
            questionNumber={questionNumber}
          />
        );
      case 5:
        return (
          <Question
            question={selectedQuestions[4]}
            handleQuestion={handleQuestion}
            questionNumber={questionNumber}
          />
        );
      default:
        return <Home startQuiz={startQuiz} />;
    }
  }

  function startQuiz() {
    setQuestionNumber(1);
  }

  function handleQuestion() {
    setQuestionNumber(questionNumber + 1);
  }

  return (
    <Container className="border border-primary p-5">
      <Row className="justify-content-center">
        <h3 className="mb-3">CONTINENT QUIZ</h3>
      </Row>
      <Row className="justify-content-center">{renderScreen()}</Row>
    </Container>
  );
}

export default App;
