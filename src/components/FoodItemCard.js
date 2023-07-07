import { CDN_URL } from "../utils/constants";

const FoodItemCard = ({ name, imageId, price, defaultPrice }) => {
  return (
    <div className="m-2 mb-10 w-56 h-auto text-center bg-orange-100 shadow-lg">
      <img
        className="w-52 p-2 mx-auto"
        src={CDN_URL + imageId}
        alt="food-image"
      />
      <h3 className="text-xl font-bold"> {name} </h3>
      <h4> Rs {price / 100 || defaultPrice / 100} </h4>
    </div>
  );
};

export default FoodItemCard;
