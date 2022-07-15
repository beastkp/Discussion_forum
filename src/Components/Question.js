import React,{useState} from 'react'

const Question = ({person,id}) => {
    //id is to be used for answering that particular question 
    const todata =()=>{

    }
const [click, setClick] = useState(false);   
let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
let date = ( cDay + "/" + cMonth + "/" + cYear )
  return (
    <div className='item' >
      <h3>Question: {person.question}</h3>
      <h5>By {person.name}  &nbsp;&nbsp;&nbsp;  {date}</h5>
      <button className='btn' onClick={()=> setClick(!click)}>Answer this</button>
      {
        click && <div><textarea name="text" id="answer" cols="30" rows="10">Write your answer</textarea><div><button className='btn' onClick={todata}>Submit answer</button></div></div>
      }
      
      </div>
  )
}

export default Question