import React from "react";
import "./Home.sass";

// COMPONENTS
import Forecast from "../Forecast/Forecast";

const Home: React.FC = () => {
  return (
    <div className="app">
      <Forecast />
    </div>
  );
};

export default Home;
