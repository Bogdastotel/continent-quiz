import React from "react";
import { Button } from "react-bootstrap";

export default function Home(props) {
  return (
    <>
      <Button variant="primary" onClick={() => props.startQuiz()}>
        Play
      </Button>
    </>
  );
}
