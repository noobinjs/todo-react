import React from "react";
import TodoItem from "./TodoItem";

const styles = {
    ul:{
    listStyle: 'none'
    }
}


export default function TodoList(props) {
    return(
        <ul style={styles.ul}>
            {props.todos.map((item, index)  => 
                 <TodoItem todo={item} index={index} key={index} />
                 )}
           
               


        </ul>
    )
    
}
