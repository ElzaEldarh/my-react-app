//2. Создай компонент с кнопкой и заголовком (например, <h1>). При каждом клике на кнопку текст в заголовке должен изменяться на случайную фразу из массива (например, массив из пяти разных фраз).

import { useState } from "react";


const words = ["hello", "bye", "good morning", "goodbye"];

const Task2 = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const changeWords = () => {
    setWordIndex((wordIndex + 1) % words.length);
  };
  return (
    <div className="container">
      <div className="header">
        <h1>{words[wordIndex]}</h1>
      </div>
      <button onClick={changeWords}>Поменять</button>
    </div>
  );
};
export default Task2;
