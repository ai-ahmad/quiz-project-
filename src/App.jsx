import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
import GameOver from "./components/GameOver/GameOver";
import { useState } from "react";

function App() {
  let [quiz, setQuiz] = useState([
    {
      id: 1,
      sovol: "Js-da nechta ozgaruvchi bor ?",
      a: "1-ta",
      b: "2-ta",
      c: "3-ta",
      jovop: "c",
    },
    {
      id: 2,
      sovol: "Js-da nechta function bor ?",
      a: "1-ta",
      b: "3-ta",
      c: "4-ta",
      jovop: "b",
    },
    {
      id: 3,
      sovol: "Reactning ozini hocklari nechta ?",
      a: "20-ta",
      b: "10-ta",
      c: "15-ta",
      jovop: "c",
    },
    {
      id: 4,
      sovol: "React-ta nechhil component bor ?",
      a: "1) function components",
      b: "2) class components",
      c: "3) function and class",
      jovop: "c",
    },
    {
      id: 5,
      sovol: "Hozi Reacti nechinchi versiyasi ?",
      a: "18.2.0",
      b: "17.0.1",
      c: "16.14.0",
      jovop: "a",
    },
  ]);
  let [quizId, setQuizId] = useState(0);
  let [length, setLength] = useState(10);
  let [number, setNumber] = useState(100 / quiz.length);
  let [count, setCount] = useState(0);
  let [wrapper, setWrapper] = useState(true);
  function upDate(e) {
    // setQuizId((prev) => prev - 1);

    if (length === 100) {
      setWrapper(false);
    } else {
      setQuizId((prev) => prev + 1);
      setLength((prev) => prev + number);
    }

    if (quiz[quizId].jovop === e.target.value) {
      setCount((prev) => prev + 1);
      console.log(count);
    } else {
      console.log("notog'ri toptiz");
    }
  }

  return (
    <div className="App w-[100%] m-auto h-[100vh] overflow-hidden bg-[#6A50E7] flex justify-center items-center">
      {wrapper && (
        <Card upDate={upDate} quiz={quiz} quizId={quizId} length={length} />
      )}
      {!wrapper && <GameOver count={count} data={quiz} />}
    </div>
  );
}


export default App;
