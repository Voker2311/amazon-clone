//setup data layer
//Tracking of the basket goes here
import React from "react";
import { createContext, useContext, useReducer } from "react";

//This is the data layer
export const StateContext = createContext();

//Access to the provider
export const StateProvider = ({ reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);



