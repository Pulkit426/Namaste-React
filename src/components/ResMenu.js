import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CDN_URL } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ResMenu = () => {
  const params = useParams();
  const { id } = params;

  const resData = useRestaurant(id);
  const menuCardData =
    resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return resData === null ? (
    <ShimmerUI />
  ) : (
    <div className="flex p-2 m-2 gap-3">
      <div>
        <h1> Res ID: {resData?.cards[0]?.card?.card?.info?.id} </h1>
        <h1> {resData?.cards[0]?.card?.card?.info?.name} </h1>
        <img
          className="h-48 w-96"
          src={CDN_URL + resData?.cards[0]?.card?.card?.info?.cloudinaryImageId}
        />
        <h2>{resData?.cards[0]?.card?.card?.info?.areaName} </h2>
        <h2>{resData?.cards[0]?.card?.card?.info?.city} </h2>
        <h2>{resData?.cards[0]?.card?.card?.info?.avgRating} stars</h2>
        <h2>{resData?.cards[0]?.card?.card?.info?.costForTwo / 100} for Two</h2>
      </div>

      <ul>
        {menuCardData?.map((item) => (
          <li key={item?.card?.info?.id}>
            {" "}
            {item?.card?.info?.name}{" "}
            <button
              className="bg-green-100 p-2 m-2"
              onClick={() => handleAddItem(item?.card?.info)}
            >
              {" "}
              Add{" "}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;
