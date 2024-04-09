import { useState, useEffect } from "react";

function Scroll(){
    function scrollHandler(){
         console.log("scrolling");
    }
    useEffect(() => {
        window.addEventListener('scroll',scrollHandler);
        return () => window.removeEventListener('scroll',scrollHandler);
    },[])
    
    return (
        <>
            <h1>Scroll Event</h1>
        </>
    )
    
}

export default Scroll;