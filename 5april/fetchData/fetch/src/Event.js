import { useEffect,useState } from "react";

function Event(){
    const[data, setData] = useState({});
    function eventHandler(e){
        
        setData({x : e.x, y : e.y});
    }
    document.title = "component did mount";
    useEffect(() => {
        window.addEventListener('mousemove', (e) => eventHandler(e));
        console.log('first');
        return () => {
            document.title = "component did updated";
            console.log('second');
            window.removeEventListener('mousemove',(e) => eventHandler(e))
        }
    },[data]);
    return <div>
        <p>{data.x}</p>
        <p>{data.y}</p>
    </div>
}
export default Event;