import {useState} from "react"

import { ACTION_TYPES,useGlobalContext } from "../store/store-context"

const useTrackLocation =()=>{
    const [errorMessage, setErrorMessage] = useState("")
    // const [latLong, setLatLong] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const {dispatch} = useGlobalContext()
    const success =(position)=>{
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude; 
        // setLatLong(`${latitude},${longitude}`)
        dispatch({
            type:ACTION_TYPES.SET_LAT_LONG,
            payload:{latLong:`${latitude},${longitude}`}
        })
        setErrorMessage("")
        setIsLoading(false)
    }
    const error =()=>{
        setIsLoading(false)
        setLatLong("")
        setErrorMessage("Unable to retrieve your location")
    }
    const handleTrackLocation =()=>{
        if(!navigator.geolocation) {
            setIsLoading(false)
            setErrorMessage("Geolocation is not supported by your browser")
          } else {
            setIsLoading(true)
            navigator.geolocation.getCurrentPosition(success, error);
          }
    }

    return {
        errorMessage,
        handleTrackLocation,
        isLoading
    }
    
}

export default useTrackLocation