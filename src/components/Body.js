import ResCard from "./ResCard"
import resList from "../utils/mockData"
import { useState, useEffect } from "react"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)
    const [searchText, setSearchText] = useState('')

    const filterDataBySearch = () => {
        return resList.filter(res => res.data.name.includes(searchText))      
    }

    useEffect( () => {
        getAllRestaurants()
    }, [])

    async function getAllRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001")
        const json = await data.json()

        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards)
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