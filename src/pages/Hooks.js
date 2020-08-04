import React, { useState } from "react";
// import "./styles.css";

function Hooks() {
  let [light, setLight] = useState(0);
  const setOff = () => setLight(0);
  const setOn = () => setLight(1);
  return (
    <div className="App">
      <div>
        <p>light : {light}</p>
      </div>
      <button onClick={setOff}>Off</button> <button onClick={setOn}>On</button>
    </div>
  );
}

export default Hooks;