import React from "react";
import { FaPlusCircle} from 'react-icons/fa';

const Form = ({inputText, setInputText, todos, setTodos, setSelect}) =>{

    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        if(inputText === "") {
            alert("Please type your todo");
        }
        else{
            setTodos([...todos,{
                text:inputText, completed:false, id:Math.random() * 100,
            }])
            setInputText("");
        }
        
        
        
    }
    
    const changeSelect = (e) =>{
        setSelect(e.target.value);
    }

    return(
        <form>
            <input type="text" onChange={inputTextHandler} value={inputText} placeholder="type to add todo.." maxlength="80"/> 
            <div className="todo-functions">   
            
           
            
                <select onChange={changeSelect}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Uncompleted</option>
                </select>

                <button className="add" onClick={submitTodoHandler}><FaPlusCircle size={40} color="#fef68a"/></button>
            </div>
        </form>
    )
}

export default Form;