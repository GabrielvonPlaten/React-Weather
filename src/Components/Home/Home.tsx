import React, { useState } from "react";
import Logo from "../../Styles/images/logo.svg";
import "./Home.sass";

const Home: React.FC = () => {
  const [count, setData] = useState<number>(0);

  console.log(process.env.API_KEY);
  return (
    <div className="app">
      <img className="app__logo" src={Logo} />
      <h1 className="title">React Weather</h1>
      <button onClick={() => setData(count + 1)}>+</button>
      <button onClick={() => setData(count - 1)}>-</button>
      <button onClick={() => setData(0)}>Reset</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default Home;
