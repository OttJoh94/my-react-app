import "./App.css";
import shrek from "../public/shrek.jpg";
import { useState } from "react";

function App() {
  const [showShrek, setShowShrek] = useState(false);

  function handleShowShrek() {
    setShowShrek((prev) => !prev);
  }
  return (
    <>
      <div className="app">
        {showShrek ? (
          <>
            <img className="shrek-background" src={shrek} alt="" />
          </>
        ) : (
          <></>
        )}

        <h1>Klicka på knappen</h1>
        <button onClick={handleShowShrek}>Klicka här!</button>
      </div>
    </>
  );
}

export default App;
