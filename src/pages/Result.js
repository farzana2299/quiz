import React from 'react'

function Result(props) {
  return (
    <div>
        <div className='show-score'>
      <b>YOUR SCORE= {props.score}</b> <br/>
      <b>TOTAL SCORE= {props.totalScore}</b> 
    </div>
    <button id="next-button" className='btn btn-primary' onClick={props.tryAgain}>Try Again</button>
    </div>
  )
}

export default Result