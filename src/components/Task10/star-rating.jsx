const StarRating = ({ rating }) => {
  return (
    <div className="container">
      {new Array(rating).fill(1).map((index) => (
        <h3 key={index}>★</h3>
      ))}
    </div>
  );
};
export default StarRating;
