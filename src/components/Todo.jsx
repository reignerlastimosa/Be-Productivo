import { FaCheckCircle } from "react-icons/fa";
import { BsFillXCircleFill } from "react-icons/bs";

const Todo = ({text, todos, setTodos, todo}) =>{

    const deleteTodo = () =>{
        setTodos(todos.filter(x=> x.id !== todo.id));
    }

    const completeTodo = () =>{
        setTodos(todos.map((x)=>{
            if(x.id === todo.id){
                return {
                    ...x, completed: !x.completed,
                };
            }
            return x;
        }))
    }
    return(
        <div className="todo">
            
            <div className={`${todo.completed ? "completed" : "incompleted"}`}><h2>{text} </h2></div>
            <div className="todo-btn">   
            <button onClick={completeTodo}><FaCheckCircle  color="green"/></button>
            <button onClick={deleteTodo}><BsFillXCircleFill  color="red"/></button>
            </div>
        </div>
    )
}


export default Todo;