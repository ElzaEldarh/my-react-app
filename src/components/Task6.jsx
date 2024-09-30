//6. Создайте компонент "Конвертер градусов Цельсия в градусы Фаренгейта". Компонент должен содержать два поля ввода для значения в градусах Цельсия и градусах Фаренгейта. После ввода значения в одно из полей, другое поле должно автоматически обновляться в соответствии с формулой конвертации.

import { useState } from "react";

const Task6 = () => {
  const [fahrenheit, setFahrenheit] = useState("");
  const getFarenheit = (cels) => {
    if (isNaN(+cels)) {
      setFahrenheit("Некорректные значения");
    } else {
      setFahrenheit(+cels * 1.8 + 32);
    }
  };

  return (
    <div>
      <div className="inputcel">
        <input
          type="text"
          onChange={(e) => {
            getFarenheit(e.target.value);
          }}
        />
      </div>
      <div className="inputfar">
        <input type="text" value={fahrenheit} readOnly />
      </div>
    </div>
  );
};

export default Task6;
