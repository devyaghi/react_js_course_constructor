import React from 'react';
import logo from './logo.svg';
import './App.css';
import Car from "./Car";

function App() {

  const info={
      car_type:"Ford",
      color:"white",
      prod_year:2020
  }
  return (
   <div>
    <Car car_info={info}   />

   </div>

);
}

export default App;
