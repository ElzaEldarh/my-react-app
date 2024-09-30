//4. Создай компонент с текстом и кнопкой. При нажатии на кнопку текст должен либо скрываться, либо показываться. Кнопка должна менять надпись в зависимости от текущего состояния (например, "Показать" или "Скрыть").
import { useState } from "react";


const Task4 = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <div className="container">
      {visible && <h1>Нажми,чтобы скрыть!</h1>}
      <button className="btn" onClick={toggleVisible}>
        {visible ? "Скрыть" : "Показать"}
      </button>
    </div>
  );
};
export default Task4;
