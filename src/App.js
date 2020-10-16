import React,{ useEffect } from 'react';
import "./App.css";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Header from './Header';
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Login from "./Login";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51HconeFLwtRxl1xBiIUim4yHH0iewAhImGhYmFCseBKjjwZjI3Sjn0MTuv5C8J5Ubvq9dnDTaFSKrWj1r41GP2G500hhCWy2bR");

function App() {
  const [{basket},dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        //User is loggin in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        //User is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
    
    return () => {

      //Cleanup operations goes in here
      unsubscribe();
    }
  },[])

  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path="/checkout">
                <Header />      
                <Checkout />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                 <Payment />
              </Elements>   
            </Route>
            {/* This is a default Route */}
           <Route path="/">
                <Header />
                <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );  
}

export default App;
