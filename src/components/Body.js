import ResCard from "./ResCard"
import resList from "../utils/mockData"
import { useState } from "react"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)
    const [searchText, setSearchText] = useState('')

    const filterDataBySearch = () => {
        return resList.filter(res => res.data.name.includes(searchText))      
    }

    return (
        <div className="body">
            <div className="search">
                <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button onClick={() => { setListOfRestaurants(filterDataBySearch()) }}> Search </button>
            </div>
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