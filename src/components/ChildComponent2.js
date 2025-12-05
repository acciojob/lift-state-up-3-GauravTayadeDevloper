
import React, { useState } from "react";
export default function ChildComponent2({selectedOptions})
{

    return(
        <div>
            <h1>Child Component 2</h1>
            <button onClick={()=>selectedOptions("Option 2")} >Option 2</button>
        </div>
    )
}