import React from 'react'
import { imageCollection } from './Question'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export default function FinalScore(props) {
    return (
        <Col className='text-center'>
            <h4>
                Your score : {props.points} points 
            </h4>
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
    )
}
