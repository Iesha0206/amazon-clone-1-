import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer//create the data layer
export const StateContext = createContext();

// Wrap our app and provide the Data layer//build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer //this is how we use it insid eof a component
export const useStateValue = () => useContext(StateContext);