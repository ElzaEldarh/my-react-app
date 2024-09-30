
const UserCard = ({ name, age, profession }) => {
  return (
    <div className="usercard">
      <h3>Имя:{name}</h3>
      <h3>Возраст:{age}</h3>
      <h3>Профессия:{profession}</h3>
    </div>
  );
};
export default UserCard;
