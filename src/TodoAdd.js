import React, {useState} from "react";
import {useContext} from "react"
import Context from "./context";


export default function AddTodo() {
    const {todoAdd} = useContext(Context)
    const [value, setValue] = useState('')

    function submitHandler(e){
        e.preventDefault()
        if(value.trim()){
            todoAdd(value)
            setValue('')              
        }
    }
   
    
    return(
        <form onSubmit={(e)=> submitHandler(e)}>
                <input class="form-control mt-5" value={value} onChange={(e)=>setValue(e.target.value)}/>
                <button class="btn btn-primary" >Add task</button>

        </form>
    )
}