import React, { useState } from "react";
import data from "./data";
import Tours from "./Components/Tours";
import "./App.css"



const App = () => {

const [tours, setTours] = useState(data);

function ignoreBtnHandler(id){
  const newTours = tours.filter(tour => tour.id !== id);
  setTours(newTours);
}

function interestBtnHandler(id){
  const newTours = tours.filter(tour => tour.id === id);
  setTours(newTours);
}

if(tours.length === 0){
  return(
    <div className="refresh-page">
      <h2>No Profile Left</h2>
      <button onClick={() => setTours(data)} className="refresh-btn">Refresh</button>
    </div>
  );
}

  return (
    <div className="App">
      <Tours tours={tours} ignoreBtnHandler={ignoreBtnHandler} interestBtnHandler={interestBtnHandler}></Tours>
    </div>
  );
};

export default App;
