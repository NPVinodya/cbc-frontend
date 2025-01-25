import { useState } from "react";
import "./testing.css";



export default function Testing(){
    const[count,setCount]=useState(0)
    const[name,setName]=useState("students")

    function increment(){
        console.log("incrementing")
        setCount(count+1)
    }
    function decrement(){
        console.log("decrementing")
        setCount(setCount-1)
    }
    function changeName(value){
        setName(value)
    }

    return(
        <div className = "background">
            <h1>{name}</h1>
            <button className="val" onClick={decrement}> - </button>
            <span>{count}</span>
            <button className="val"onClick ={increment}> + </button>

        <div className="button-panel">
            <button onClick={()=>{changeName("Students")}}>students</button>
            <button onClick={()=>{changeName("Teachers")}}>Teacher</button>
            <button onClick={()=>{changeName("Admins")}}>Admin</button>

        </div>
        </div>
    )
}