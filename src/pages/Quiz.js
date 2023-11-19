import React, { useState } from 'react'
import { Data } from '../Data/data'
import Result from './Result';

function Quiz() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    
    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< Data.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(clickedOption===Data[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
  return (
    <div className='row'>
        
        <div className="container col-lg-12 bx">
            {showResult ? (
                <Result score={score} totalScore={Data.length} tryAgain={resetAll}/>
            ):(
            <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}. </span>
                <span id="question-txt">{Data[currentQuestion].question}</span>
            </div>
            <div className="option-container">
                {Data[currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        
                        className={`option-btn ${
                            clickedOption == i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}                
            </div>
            <input type="button" value="Next" id="next-button" className=' btn btn-primary' onClick={changeQuestion}/>
            </>)}
        </div>
    </div>
  )
}

export default Quiz