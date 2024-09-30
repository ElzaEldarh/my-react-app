//1. Сделай компонент с текстом "Включено" или "Выключено" и кнопкой. По клику на кнопку состояние текста должно переключаться между этими значениями.
import { useState } from "react";


const Task1 = () => {
  const [btn, setBtn] = useState("Включено");
  const changeBtn = () => {
    setBtn(btn === "Включено" ? "Выключено" : "Включено");
  };
  return (
    <div className="container">
      <h1>{btn}</h1>
      <button className="btn" onClick={changeBtn}>
        Поменять
      </button>
    </div>
  );
};
export default Task1;
