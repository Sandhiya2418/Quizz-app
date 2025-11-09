import React from 'react'


const Result = ({score,user}) => {
  return (
    <div>
      <h1>Quiz Completed...!</h1>
      <h2>Hello {user} , your score is {score}</h2>
      <a href="/home"><button>Back to Home</button></a>
    </div>
  )
}

export default Result
