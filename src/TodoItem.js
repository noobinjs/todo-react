import React, {useContext} from "react";
import Context from "./context";


export default function TodoItem(props){
    const { todoCompleted, todoRemove } = useContext(Context)
    console.log(props)
    const todo = props.todo
    return(
        <li className="itemstyle"  > <span style={ todo.completed ? {textDecoration:'line-through'} :{}}><span className="litext">{props.index + 1} &nbsp;<input class="form-check-input" type="checkbox" checked={todo.completed}  onChange={() => todoCompleted(todo.id)}/> {todo.title} </span></span> <button class="btn-group btn-group-sm btn btn-danger" onClick= {()=>todoRemove(todo.id)}>&times;</button> </li>
    )
}