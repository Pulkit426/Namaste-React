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
    <div className="res-card">
      <img
        className="res-image"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-image"
      />
      <h3 className="res-name"> {name} </h3>
      <h4>{cuisines.join(",")} </h4>
      <h4> {avgRating} stars </h4>
      <h4> {costForTwo / 100} for Two </h4>
      <h4> {deliveryTime} minutes </h4>
    </div>
  );
};

export default ResCard;
