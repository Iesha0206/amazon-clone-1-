import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./login";
import { auth } from "./firebase";
import { useStateValue} from "./StateProvider";

function App() {
  //get the dispatch function from stateprovider
  const [{}, dispatch] = useStateValue();


  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",  //action type that the reducer will listen for
          user: authUser,   //payload: the authenticated user object
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,  //setting user to null to signify logout
        });
      }
    });
  }, [dispatch]); //ensure dispatch is part of the dependency array

  return (
    // BEM 
    <Router>
      <div className="app">
        <Routes>
          {/* Home route with Header and Home components */}
          <Route path="/" element={
            <React.Fragment>
              <Header />
              <Home />
            </React.Fragment>
          } />
          
          {/* Login route */}
          <Route path="/login" element={<Login />} />

          {/* Checkout route with Header and Checkout components */}
          <Route path="/checkout" element={
            <React.Fragment>
              <Header />
              <Checkout />
            </React.Fragment>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

