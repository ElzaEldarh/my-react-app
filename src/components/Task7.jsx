//7. Создайте компонент "Простой калькулятор". Создайте два поля, в одном пользователь будет вводить одно значение, а другом второе. При нажатии на кнопку в диве должен отображаться текст "Ваш ответ: " и сумма двух значений из полей ввода.

import { useState } from "react";

const Task7 = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [summa, setSumma] = useState(null);

  const getSum = () => {
    if (isNaN(num1) || isNaN(num2)) {
      setSumma("Некорректное значение");
    } else {
      setSumma(num1 + num2);
    }
  };

  return (
    <>
      <div className="inputs">
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(+e.target.value)}
        ></input>
        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(+e.target.value)}
        ></input>
      </div>
      <div className="btn">
        <button onClick={getSum}>Вывести сумму</button>
      </div>
      <div className="output">{summa !== null ? summa : ""}</div>
    </>
  );
};

export default Task7;
