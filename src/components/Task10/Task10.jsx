//3. Звездный рейтинг
//Создай компонент StarRating, который принимает пропс rating (число от 1 до 5) и отображает соответствующее количество звезд (можно использовать символ "★").
//В родительском компоненте передай разные значения для rating, чтобы отображать рейтинг для нескольких продуктов.

import ProductCard from "./productCard";

const Task10 = () => {
  const products = [
    { id: 1, name: "Стол", rating: 5 },
    { id: 2, name: "Стул", rating: 4 },
    { id: 3, name: "Кресло", rating: 3 },
    { id: 4, name: "Диван", rating: 2 },
    { id: 5, name: "Гамак", rating: 1 },
  ];

  return (
    <div>
      {products.map(({ id, name, rating }) => (
        <ProductCard key={id} name={name} rating={rating}></ProductCard>
      ))}
    </div>
  );
};
export default Task10;
