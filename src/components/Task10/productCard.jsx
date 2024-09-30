import StarRating from "./star-rating";

const ProductCard = ({ name, rating }) => {
  return (
    <div className="container">
      <h3>{name}</h3>
      <StarRating rating={rating}></StarRating>
    </div>
  );
};
export default ProductCard;
