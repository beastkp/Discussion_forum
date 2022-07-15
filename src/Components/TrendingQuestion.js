import React from 'react'
import Question from'./Question';
const TrendingQuestion = ({people,setPeople}) => {
  return (
    <>
    <h1>Trending Questions</h1>
    {people.map((person)=>{
      return <div key={person.id}>
        <Question person={person} id={person.id}/>
        </div>
    })
  }
    </>
  )
}

export default TrendingQuestion