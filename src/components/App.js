
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [text, setText] = useState("");

  // function inputText(e) {
  //   setText(e.target.value);
  // }

  return (
    <div>
      {/* Do not remove the main div */}
      {/* <p>Enter your name:</p> */}
      <input type="text" onKeyUp={(e) => setText(`Hello ${e.target.value}!`)} />
      
      <p>{text}</p>
    
    </div>
  );
}

export default App;
