import React from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Buttons(){




return(
   
    <div>
        <h1 className='h1'>Counter Application</h1>
        <h1 className="h1">Count:</h1>
        <div className="button">
     <button  onClick={()  => dispatchEvent({type: 'INCREMENT'})}>
        increment 
     </button>
     <button  onClick={()  => dispatchEvent({type: 'DECREMENT' })}>
      decrement 
     </button>
     <button onClick={()  => dispatchEvent({type: 'RESET'})} >
        Reset 
     </button>


    </div>
    </div>
    
)


}


