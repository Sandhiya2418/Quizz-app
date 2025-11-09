import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({user,setUser}) => {
  const navigator=useNavigate();
  const handleSubmit=(e) =>{
     e.preventDefault(); 
    navigator("/quiz");
    
  };
  return (
    <div>
      <h1>Welcome to Quiz App...!</h1>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="name">Name:</label>
        <input type="text" id='name'name='name' required onChange={(e)=>{
          const {value}=e.target;
          setUser(value)
        }}/>
        </section><br />
        <button disabled={user.length === 0} type='submit'>Submit</button>
      </form>
      
    </div>
  )
}

export default Home
