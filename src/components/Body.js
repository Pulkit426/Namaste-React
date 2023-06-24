import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const filterDataBySearch = () => {
    return allRestaurants.filter((res) =>
      res.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  useEffect(() => {
    getAllRestaurants();
  }, []);

  async function getAllRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  if (!isOnline) return <h1> 🔴 OFFLINE !! PLEASE CHECK YOUR INTERNET </h1>;

  return allRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="p-2 m-2 bg-orange-100">
        <input
          className="p-2"
          placeholder="Search"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="m-2 p-2 shadow-md bg-purple-200 rounded-md"
          onClick={() => {
            searchText && setFilteredRestaurants(filterDataBySearch());
          }}
        >
          {" "}
          Search{" "}
        </button>
        <button
          className="m-2 p-2 shadow-md bg-purple-200 rounded-md"
          onClick={() => {
            setFilteredRestaurants(allRestaurants);
            setSearchText("");
          }}
        >
          {" "}
          Reset{" "}
        </button>
      </div>
      <div className="filter">
        <button
          className="m-2 p-2 shadow-md bg-purple-200 rounded-md"
          onClick={() => {
            let filteredList = allRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          {" "}
          Top Rated Restaurants{" "}
        </button>
      </div>

      <div className="flex flex-wrap m-5 p-5">
        {filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.data.id}>
            {" "}
            <ResCard key={restaurant.data.id} resData={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
