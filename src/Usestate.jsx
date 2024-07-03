import React,{useState} from 'react';
function Usestate(){
    const [c,setCount]=useState(0);
    return(
        <div>
            <p>you clicked ${c} times</p>
            <button onClick={()=>setCount(c+1)}>click</button>
        </div>
    )
}
export default Usestate;