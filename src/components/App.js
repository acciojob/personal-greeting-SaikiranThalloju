
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [text, setText] = useState("");

  function inputText(e) {
    setText(e.target.value);
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <input type="text" onChange={(e) => inputText(e)} />
      {text && <p>Hello {text}!</p>}
    </div>
  );
}

export default App;
