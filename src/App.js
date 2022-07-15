import logo from "./logo.svg";
import AskQuestion from "./Components/AskQuestion";
import TrendingQuestion from "./Components/TrendingQuestion";
import { useState } from "react";

function App() {
  const [person, setPerson] = useState({
    question: "",
    name: "Anonymous"
  });
  const [people, setPeople] = useState([]);
  return (
    <div>
      <AskQuestion
        person={person}
        setPerson={setPerson}
        people={people}
        setPeople={setPeople}
      />
      <TrendingQuestion
        people={people}
        setPeople={setPeople}
        person={person}
        setPerson={setPerson}
      />
    </div>
  );
}

export default App;
