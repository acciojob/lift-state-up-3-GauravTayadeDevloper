
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent2 from "./ChildComponent2";
import ChildComponent1 from "./ChildComponent1";

const App = () => {
  let [selectedOption,setselectedOption]=useState("");
  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
          <ChildComponent1 selectedOptions={setselectedOption}/>
        <ChildComponent2 selectedOptions={setselectedOption}/>
      
        <p>Selected Option: {selectedOption}</p>

    </div>
  )
}

export default App
