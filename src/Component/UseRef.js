import React,{useState,useEffect,useRef}  from 'react'
const UseRef = () => {
    const[name,setName]=useState("");
    const[counter,setCounter]=useState("");
    const inputE1=useRef("");
    const previousCounterRef=useRef("");
    console.log(inputE1);
    const resetInput=()=>{
        setName("");
        inputE1.current.focus();
        console.log(inputE1.current.value);
        inputE1.current.value="Dipesh";
    };
    useEffect(()=>{
        previousCounterRef.current=counter;
    },[counter]);
  return (
    <div>
        <div>
        <input ref={inputE1} name="name" autoComplete='off' type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={resetInput}>Reset</button>
        </div>
        <div>My name is {name}</div>
        <h1>Random counter:{counter}</h1>
        {typeof previousCounterRef.current!== "undefined" &&(
            <h2>Previous Counter:{previousCounterRef.current}</h2>
        )}
        <button onClick={(e)=>setCounter(Math.ceil(Math.random()*100))}>Generate Number</button>
    </div>
  )
}

export default UseRef