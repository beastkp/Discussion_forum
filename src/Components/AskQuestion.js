// import { Axios  } from "axios";
import React, { useState } from "react";
// const axios  = require("axios");

const AskQuestion = ({person,setPerson,people,setPeople}) => {
  // const [question,setQuestion] = useState('');
  const userContext = React.createContext();
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   await axios.post('/api/question',{question:person.question,name:person.name})
    // } catch (error) {
    //   console.log(error);
    // }
    console.log(e.cancellable);
    if (person.question && person.name) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ question: "", name: "Anonymous" });
    }
  };
  return (
    <div>
      <h1>Ask a Question </h1>
      <form className="form" method="post">
        <label htmlFor="question">Enter Question here:</label>
        <div>
        <textarea
          type="text"
          id="question"
          name="question"
          value={person.question}
          onChange={handleChange}
        />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={person.name}
            onChange={handleChange}
          />
        </div>
        <button className="btn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AskQuestion;
