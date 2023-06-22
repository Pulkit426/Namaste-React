import { useState, useEffect } from "react"
import { FETCH_MENU_URL } from "./constants"

const useRestaurant = (resId) => {
    const [resData, setResData] = useState(null)

    useEffect(() => {
        getResData()
   }, [])

   async function getResData() {
       const data = await fetch(FETCH_MENU_URL + resId)
       const json = await data.json()
       setResData(json.data)
   }

   return resData
}

export default useRestaurant