import React from 'react'

function Result(props) {
  return (
    <div>
        <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    </div>
  )
}

export default Result