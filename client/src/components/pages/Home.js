import React, { Component, useState, useEffect } from "react";
import { CSVLink } from "react-csv";

import "../../utilities.css";
import "./Home.css";

const Home = () => {
  const [value, setValue] = useState("");
  const [typingData, setTypingData] = useState([]);
  const [prevLength, setPrevLength] = useState(0);
  const [passageText, setPassageText] = useState("placeholder text");
  const [fileHeaders, setFileHeaders] = useState(
    [
      { label: "Key Stroke", key: "keystroke" },
      { label: "Timestamp", key: "timestamp" },
      { label: "Full Text", key: "fulltext"}
    ]
  );

  useEffect(() => {
    retrievePassageText();
  }, []);

  const handleItemChange = (event) => {
    setValue(event.target.value);

    let keystroke;
    if (event.target.value.length <= prevLength) {
      keystroke = "DEL";
    } else {
      keystroke = event.target.value.charAt(event.target.value.length-1);
    }
    const newKey = { keystroke: keystroke, timestamp: event.timeStamp, fulltext: event.target.value};
    setTypingData([...typingData, newKey]);
    setPrevLength(event.target.value.length);
  };

  const retrievePassageText = () => {
    const minLength = 100;
    const maxLength = 150;
    // const query = {minLength: minLength, maxLength: maxLength};
    const url = `https://api.quotable.io/random?minLength=${minLength}&maxLength=${maxLength}`;
    fetch(url).then((res) => {
      res.json().then((jsonRes) => {
        setPassageText(jsonRes.content);
        setFileHeaders(
          [
            { label: "Key Stroke", key: "keystroke" },
            { label: "Timestamp", key: "timestamp" },
            { label: "Full Text", key: "fulltext" },
            { label: jsonRes.content, key: "actualtext" }
          ]
        )
      });
    });
  };

  const resetData = () => {
    setValue("");
    setTypingData([]);
    setPrevLength(0);
    retrievePassageText();
  };

  // const fileHeaders = [
  //   { label: "Key Stroke", key: "keystroke" },
  //   { label: "Timestamp", key: "timestamp" },
  //   { label: "Full Text", key: "fulltext"}
  // ];

  return (
    <>
    <div className="u-flexColumn u-flex-justifyCenter u-flex-alignCenter Home-container">
      <h1>Text Logging Web App for 2.671</h1>
        <div className="Home-passageText">{passageText}</div>
        <input
          className="Home-textText"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          type="text"
          placeholder=""
          value={value}
          onChange={handleItemChange}
          />
        
        {typingData?.length  &&
        <>
        <h3>Export to CSV</h3>
          <CSVLink
            className="Home-exportLink"
            headers={fileHeaders}
            data={typingData}
            filename="results.csv"
            target="_blank"
          >
            Export
          </CSVLink>
          </>
        }
        <button className="Home-resetButton" onClick={resetData}>Reset</button>
      </div>
    </>
  );
};

export default Home;
