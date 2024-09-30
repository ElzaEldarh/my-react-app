//1. Создай компонент Button, который принимает пропс label и отображает кнопку с переданным текстом.
//В родительском компоненте используй Button несколько раз, передавая разные надписи для кнопок (например, "Купить", "Подробнее").

import Btn from "./Btn";

const Task8 = () => {
  const buttons = [
    { label: "Купить" },
    { label: "Заказать" },
    { label: "Избранное" },
    { label: "Корзина" },
    { label: "Назад" },
  ];

  return (
    <>
      {buttons.map(({ label }, i) => (
        <Btn key={i} label={label}></Btn>
      ))}
    </>
  );
};

export default Task8;
