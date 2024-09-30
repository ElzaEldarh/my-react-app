//5. Создай компонент с текстовым полем (input) и списком имен (например, массив из 5-10 имен). При вводе текста в поле список должен фильтроваться по именам, которые содержат введенные буквы.

import { useState } from "react";

const Task5 = () => {
  const [value, setValue] = useState("");
  const names = [
    "Александр",
    "Мария",
    "Дмитрий",
    "Ольга",
    "Екатерина",
    "Иван",
    "Николай",
    "Анна",
    "Татьяна",
    "Павел",
  ];

  const filteredNames = names.filter((name) =>
    name.includes(value)
  );

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
     {filteredNames.map((name,i)=>(
        <div key={i}>
            <p>{name}</p>
        </div>
     ))}
    </div>
  );
};

export default Task5;
