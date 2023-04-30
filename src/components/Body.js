import ResCard from "./ResCard"
import resList from "../utils/mockData"
import { useState } from "react"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)

    return (
        <div className="body">
            <div className="filter"> 
                <button className="filter-btn" onClick={() => {
                    let filteredList = listOfRestaurants.filter(res => res.data.avgRating>4)
                    setListOfRestaurants(filteredList)
                }}> Top Rated Restaurants </button> 
            </div>

            <div className="res-container">
               {listOfRestaurants.map(restaurant => <ResCard key={restaurant.data.id} resData={restaurant} /> )}
            </div>
        </div>
    )
}

export default Body