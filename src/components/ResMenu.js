import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CDN_URL } from '../utils/constants'
import ShimmerUI from "./ShimmerUI";

const ResMenu = () => {
    const params = useParams()
    const {id} = params

    const [resData, setResData] = useState(null)

    useEffect(() => {
         getResData()
    }, [])

    async function getResData() {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&submitAction=ENTER`)
        const json = await data.json()
        setResData(json.data)
    }
    console.log(resData?.data?.cards[0]?.card?.card?.info)

    const menuCardData = resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
    return (resData===null) ? <ShimmerUI /> : (
        <div className="res-menu-card-container">
            <div>
                <h1> Res ID: {resData?.cards[0]?.card?.card?.info?.id} </h1> 
                <h1> {resData?.cards[0]?.card?.card?.info?.name} </h1>
                <img src={CDN_URL + resData?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
                <h2>{resData?.cards[0]?.card?.card?.info?.areaName} </h2>
                <h2>{resData?.cards[0]?.card?.card?.info?.city} </h2>
                <h2>{resData?.cards[0]?.card?.card?.info?.avgRating} stars</h2>
                <h2>{resData?.cards[0]?.card?.card?.info?.costForTwo/100} for Two</h2>
            </div>

            <ul>
            {menuCardData?.map(item => <li key={item?.card?.info?.id}> {item?.card?.info?.name}</li>)}
            </ul>

        </div>
    )
}

export default ResMenu