import React from "react";
import Tabs from "./Tabs";
import "./App.css";

function App() {
  return (
    <div>
      <Tabs>
        <div label="My Home">
          <div>
            <h1>Nothing here!</h1>
            <p>Why don't you <a>add a new shortcut?</a></p>
          </div>
        </div>
        <div label="My Business">
          Working hard or hardly working!
        </div>
        <div label="Settings">
          Nothing to see here!
        </div>
        <div label="Profile">
          Coming soon!
        </div>
      </Tabs>
    </div>
  );
}

export default App;