//2. Создай компонент UserCard, который принимает пропсы: name, age, и occupation. Компонент должен отображать карточку с информацией о пользователе (например: "Имя: Иван, Возраст: 25, Профессия: Программист").
//В родительском компоненте отобрази несколько карточек для разных пользователей.
import UserCard from "./UserCard";

const Task9 = () => {
  const userCards = [
    { name: "Elza", age: 22, profession: "teacher" },
    { name: "Natasha", age: 23, profession: "programmer" },
    { name: "Roza", age: 24, profession: "singer" },
    { name: "Marina", age: 25, profession: "dancer" },
  ];
  return (
    <>
      {userCards.map(({ name, age, lastName }, i) => (
        <UserCard key={i} name={name} age={age} profession={profession}></UserCard>
      ))}
    </>
  );
};
export default Task9;
