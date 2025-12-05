
import React, { useState } from "react";
export default function ChildComponent1({selectedOptions})
{
    return(
        <div>
            <h1>Child Component 1 </h1>
            <button onClick={()=>selectedOptions("Option 1")} >Option 1</button>
        </div>
    )
}