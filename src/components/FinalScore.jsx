import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export default function FinalScore(props) {
  // useEffect(() => {
  //   props.updateScores(props.points);
  //   setScores(
  //     JSON.parse(localStorage.getItem("scores")).sort(function (a, b) {
  //       return b - a;
  //     })
  //   );
  // }, []);
  useEffect(() => {
    props.updateScores(props.points);
  }, []);
  return (
    <Col className="text-center">
      <h4>Your score : {props.points} points</h4>

      <div>
        <Button
          variant="primary"
          className="mt-3"
          onClick={() => props.startQuiz()}
        >
          Play again
        </Button>
      </div>
    </Col>
  );
}
