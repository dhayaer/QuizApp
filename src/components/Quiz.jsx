import React, { useState } from 'react'
import './Quiz.css'
import { data } from '../assets/data';


const Quiz = () => {
let [Index,setIndex] = useState(0);
let [Question,setQuestion] = useState(data[Index])
let [score ,setScore] = useState([]);
let [selectedoption,setselectedoption] = useState(-2)
let [rightanswer,setRightanswer] = useState(-1)
let [end,setend] = useState(true)


const chekAns = (option) => {
  setselectedoption(option)
  setRightanswer(Question.ans-1)
  if(option === Question.ans-1) {
    setRightanswer(option)
    if(!score.includes(Index+1))
    {
      setScore([...score,Index+1])
    }
  }
  
};

const nextqstn =()=>{
  setIndex(Index+1)
  setQuestion(data[Index+1])
  setRightanswer(null)
  setselectedoption(-1)
  if(Index === data.length-1)
  {
    setend(false)
  }
}
  return (
    <div>
      {
        end===true ?
    <div  className='contanier'>
        <h1>Quiz App</h1>
        <hr />

        <h2> {Index+1}.{Question.question}</h2>
        <ul>

        {
        Question.options.map((Opt,index)=>(
          <li key={index} onClick={()=>{chekAns(index)}} style={{backgroundColor: index!=rightanswer? index ===selectedoption? index === rightanswer ? 'green' : 'red':'white':'green'}}>{Opt}</li>
        ))
      }
      
        </ul>
        <button onClick={nextqstn}>NEXT</button>
        <div className='score'>Score:{score.length}</div>
        <div className='index'>{Index +1} of {data.length} Questions</div>
        </div>
        :
        <div className='contanier'><h1>Thankyou !</h1>
        <hr />
        <h2>Your score is {score.length} out of 6</h2></div>
      }
    </div>
  )
}

export default Quiz