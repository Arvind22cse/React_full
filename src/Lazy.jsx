import React from "react";
import Error from './Error.jsx'
const Lazyeg=React.lazy(()=>import("./Lazyeg.jsx"))
function Lazy(){
    return(
        <>
         <Error>
        <React.Suspense fallback={<div>loading...</div>}>
        <Lazyeg/>
        </React.Suspense>
        </Error>
        </>
    )
}
export default Lazy;