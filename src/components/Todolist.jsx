import React from "react";
import Todo from "./Todo";

const Todolist = ({todos, setTodos, filter}) =>{
    return(
        <div className="todolist">
            <div>
                
                {filter.map((todo)=>(<Todo text={todo.text} key = {todo.id} todo ={todo} todos ={todos} setTodos ={setTodos}/>))}
            </div>
        </div>
    )
}


export default Todolist;