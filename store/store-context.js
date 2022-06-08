import {createContext,useReducer,useContext} from "react"
export const ACTION_TYPES={
    SET_LAT_LONG:"SET_LAT_LONG",
    SET_COFFEE_STORE:"SET_COFFEE_STORE"
  }

  const storeReducer=(state, action)=>{
    switch(action.type){
      case ACTION_TYPES.SET_LAT_LONG:{
          return {
            ...state,
            latLong:action.payload.latLong
          }
      }
      case ACTION_TYPES.SET_COFFEE_STORE:{
        return {
          ...state,
          coffeeStores:action.payload.coffeeStores
        }
      }
      default:{
        throw new Error(`unhandled anction type ${action.type}`)
      }
    }
  }
const AppContext = createContext()

const AppProvider =({children})=>{
  const initialState={
    latLong:"",
    coffeeStores:[]
  }
 const [state, dispatch] = useReducer(storeReducer, initialState)
  return <AppContext.Provider value={{state,dispatch}}>
     {children}
  </AppContext.Provider>
}

export const useGlobalContext=()=>{
 return useContext(AppContext)
}
export default AppProvider