import React from 'react'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import "./App.css"
import { useState } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
function App() {
  const [user, setUser] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home user={user} setUser={setUser} />} />
          <Route path='/quiz' element={<Quiz setScore={setScore} />} />
          <Route path="/result" element={<Result  user={user}  score={score}/>} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
