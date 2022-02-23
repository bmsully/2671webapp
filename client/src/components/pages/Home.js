import React, { Component, useState } from "react";

import "../../utilities.css";
import "./Home.css";

const Home = () => {
  const [value, setValue] = useState();

   const handleItemChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  }
  
  return (
    <>
      <h1>Text Logging Web App</h1>
      <h2> What you need to change in this skeleton</h2>
      <input
          type="text"
          placeholder=""
          value={value}
          onChange={handleItemChange}
          className={"u-flex u-flex-justifyCenter u-flex-alignCenter"}
          />
    </>
  );
};

export default Home;
