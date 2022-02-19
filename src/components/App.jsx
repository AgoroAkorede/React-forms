import React, { useState } from "react";

function App() {
  let [name, setName] = useState("");
  let [headingText, setHeading] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }
  function addName() {
    setHeading(name);
  }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={addName}>Submit</button>
    </div>
  );
}

export default App;
