
import React, { useRef, useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  let id = useRef(0);
  const[tabs, setTabs] = useState([
    {
      id:id.current++,
      title:"Tab",
      content:1,
    },
    {
      id:id.current++,
      title:"Tab",
      content:2,
    },
    {
      id:id.current++,
      title:"Tab",
      content:3,
    },
  ]);
  return (
    <div>
        <Child tabs={tabs}/>
    </div>
  )
}

export default App
