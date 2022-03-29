import React,{useState} from 'react'
import Result from "./Result";
const SResult = () => {
    const[img,setImg]=useState("");

    const inputEvent=(event)=>{
        const data=event.target.value;
        console.log(data);
        setImg(data);
    }
  return (
    <div>
        <div className="searchbar">
                <input type="text" placeholder="search anything" value={img} onChange={inputEvent} />
                <Result name={img}/>
        
        </div>


    </div>
  )
}

export default SResult