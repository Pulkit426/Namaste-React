import ResCard from "./ResCard"
import { useState, useEffect } from "react"

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState('')

    const filterDataBySearch = () => {
        return allRestaurants.filter(res => res.data.name.toLowerCase().includes(searchText.toLowerCase()))      
    }

    useEffect( () => {
        getAllRestaurants()
    }, [])

    async function getAllRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()

        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    return (
        <div className="body">
            <div className="search">
                <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button onClick={() => { searchText && setFilteredRestaurants(filterDataBySearch()) }}> Search </button>
                <button onClick= {() => {
                    setFilteredRestaurants(allRestaurants)
                    setSearchText('')
                    }}> Reset </button>
            </div>
            <div className="filter"> 
                <button className="filter-btn" onClick={() => {
                    let filteredList = allRestaurants.filter(res => res.data.avgRating>4)
                    setFilteredRestaurants(filteredList)
                }}> Top Rated Restaurants </button> 
            </div>

            <div className="res-container">
               {filteredRestaurants.map(restaurant => <ResCard key={restaurant.data.id} resData={restaurant} /> )}
            </div>
        </div>
    )
}

export default Body