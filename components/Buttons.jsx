import React from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Buttons(){


const count = useSelector((state) => state.count);    
const dispatch = useDispatch();


return(
   
    <div>
        <h1 className='h1'>Counter Application</h1>
        <h1 className="h1">Count:{count}</h1>
        <div className="button">
     <button  onClick={()  => dispatch
        ({type: 'INCREMENT'})}>
        increment 
     </button>
     <button  onClick={()  => dispatch
        ({type: 'DECREMENT' })}>
      decrement 
     </button>
     <button onClick={()  => dispatch
        ({type: 'RESET'})} >
        Reset 
     </button>


    </div>
    </div>
    
)


}


