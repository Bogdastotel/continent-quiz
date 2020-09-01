import React from 'react'
import '../css/answer.css'


export default function Answers(props) {
    return (
        <>
            <div className="answer">{props.correctAnswer}</div>
            <div className="answer">{props.answers[0]}</div>
            <div className="answer">{props.answers[1]}</div>
        </>
    )
    
}
