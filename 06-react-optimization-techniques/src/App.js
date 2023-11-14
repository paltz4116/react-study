import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('App Running');

  const toggleParagraphHandler = () => {
    setShowParagraph((previous) => !previous);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>New</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
