//3. Сделай компонент с двумя кнопками — "Лайк" и "Дизлайк" — и двумя счетчиками, которые показывают количество лайков и дизлайков. При нажатии на соответствующую кнопку значение соответствующего счетчика должно увеличиваться.
import { useState } from "react";

const Task3 = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const getLike = () => {
    setLikes(likes + 1);
  };
  const getDislike = () => {
    setDislikes(dislikes + 1);
  };
  return (
    <div className="container">
      <div className="count">
        <h2 className="like">{likes}Лайков</h2>
        <h2 className="dislike">{dislikes}Дизлайков</h2>
      </div>
      <div className="btns">
        <button className="like" onClick={getLike}>
          Like
        </button>
        <button className="dislike" onClick={getDislike}>
          Dislike
        </button>
      </div>
    </div>
  );
};
export default Task3;
