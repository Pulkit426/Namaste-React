import { CDN_URL } from "../utils/constants";

const ResCard = ({ resData }) => {
  const {
    name,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    deliveryTime,
    avgRating,
  } = resData.data;
  return (
    <div className="m-2 mb-10 w-56 h-auto text-center bg-orange-100 shadow-lg">
      <img
        className="w-52 p-2 mx-auto"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-image"
      />
      <h3 className="text-xl font-bold"> {name} </h3>
      <h3 className="whitespace-normal break-all">{cuisines.join(",")} </h3>
      <h4> {avgRating} stars </h4>
      <h4> {costForTwo / 100} for Two </h4>
      <h4> {deliveryTime} minutes </h4>
    </div>
  );
};

export default ResCard;
