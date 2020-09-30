import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";

export default function Home(props) {
  const [highestScores, setHighestScores] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("scores")) !== null) {
      setHighestScores([...JSON.parse(localStorage.getItem("scores"))]);
    }
  }, []);

  return (
    <Row>
      <Col>
        {highestScores.length > 0 && (
          <div>
            Top Scores:
            <h3 className="mt-3">1. {highestScores[0] || "0"}</h3>
            <h3>2. {highestScores[1] || "0"}</h3>
            <h3>3. {highestScores[2] || "0"}</h3>
          </div>
        )}

        <Button
          variant="primary"
          className="mt-3"
          onClick={() => props.startQuiz()}
        >
          Play
        </Button>
      </Col>
    </Row>
  );
}
