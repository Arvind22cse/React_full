import React,{useState,useEffect} from 'react';
function UseEffect(){
const[c,setCount]=useState(0);
useEffect(()=>{
    document.title=`you have clicked ${c} times`;
});
return(
    <>
    <p>time {c}</p>
    <button onClick={()=>setCount(c+1)}>click</button>
    </>
)
}
export default UseEffect;