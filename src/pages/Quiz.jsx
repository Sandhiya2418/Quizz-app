import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
  const questions =[
   {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "How many days are there in a leap year?",
    options: ["365", "366", "364", "360"],
    answer: "366"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: ["Tiger", "Elephant", "Lion", "Leopard"],
    answer: "Lion"
  },
  {
    question: "How many colors are there in a rainbow?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "Which gas do plants produce during photosynthesis?",
    options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    answer: "Oxygen"
  },
  {
    question: "Which festival is known as the Festival of Lights?",
    options: ["Holi", "Diwali", "Eid", "Christmas"],
    answer: "Diwali"
  },
  {
    question: "Which is the fastest land animal?",
    options: ["Cheetah", "Horse", "Leopard", "Tiger"],
    answer: "Cheetah"
  },
  {
    question: "How many continents are there in the world?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  }
  ]
const Quiz = ({setScore}) => {
     const [questionIdx,setquestionIdx]=useState(0);
       const navigator = useNavigate();
     const handleAnswer=(selectedAnswer)=>{
      const isCorrect=selectedAnswer===questions[questionIdx].answer;

      if(isCorrect){
        setScore(prevScore=>prevScore+1)
      }
      if(questionIdx<questions.length-1){
      setquestionIdx(prevIdx=>prevIdx+1)
      }else{
        navigator("/result")
      }
     }
  return (
    <div>
         <h1>Welcome to Quiz Page...!</h1>
         <h2>{questionIdx+1}.{questions[questionIdx].question} ?</h2>
         <h2>{questions[questionIdx].options.map((options,idx)=>(
          <button key={idx} onClick={()=>handleAnswer(options)}>{options}</button>
         ))}</h2>
      <a href="/home"><button>Back to Home</button></a>
    </div>
  )
}

export default Quiz
