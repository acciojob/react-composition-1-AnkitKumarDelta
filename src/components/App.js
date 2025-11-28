
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  const[tabs, setTabs] = useState([
    "Tab 1", "Tab 2", "Tab 3"
  ]);
  return (
    <div>
        <Child tabs={tabs}/>
    </div>
  )
}

export default App
