import React, {useState, useEffect} from 'react'
import '../css/answer.css'


export default function Answers(props) {
    

    const [randomAnswers, setAnswers] = useState([])


    useEffect(() => {
      let randomAnswersExceptTheCorrectAnswer = props.continents.filter(continent => continent !== props.correctAnswer).sort(() => 0.5 - Math.random())
      .slice(0, 2)

      setAnswers([...randomAnswersExceptTheCorrectAnswer, props.correctAnswer].sort(() => 0.5 - Math.random())
      .slice(0, 3))
    },[props.questionNumber])
        
    
    return (
        <>
            <div className="answer">{randomAnswers[0]}</div>
            <div className="answer">{randomAnswers[1]}</div>
            <div className="answer">{randomAnswers[2]}</div>
        </>
    )
    
}
