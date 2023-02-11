import Form from '../components/Form';
import Todolist from '../components/Todolist';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import { BsFillMoonStarsFill} from "react-icons/bs";
import { BsStars} from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";

function Todopage({darkMode, setDarkMode ,toggle,setToggle}) {

  const [inputText,setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  const[select, setSelect] = useState("all");
  const[filter,setFilter] = useState([]);

  const filterChange = () =>{
    if (select === "completed"){
      setFilter(todos.filter((todo)=> todo.completed === true));
    }
    else if (select === "incomplete") { 
      setFilter(todos.filter((todo)=> todo.completed === false));
    }
    else{
      setFilter(todos);
    }
  }

  useEffect(()=>{
		const createdTodos = JSON.parse(localStorage.getItem('todos'));
		
		if(createdTodos){
			setTodos(createdTodos);
		}
	}, []);
	
	useEffect(()=>{
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos]);

  
  useEffect(()=>{
    filterChange();
  }, [todos,select]);

  
	


  
  return (
    <div className={`${darkMode ? 'dark-mode' :'light-mode'}`}>

      <BsFillMoonStarsFill className="big-moon" size={100}/> 
			<BsStars className="star-1" size={50}/> 
			<BsStars className="star-2" size={50}/> 
			<BsStars className="star-3" size={50}/> 
			<BsStars className="star-4" size={50}/> 
			<BsStars className="star-5" size={50}/> 

			<FaSun className="big-sun" size={200}/>
			<FaCloud className="cloud-1" size={120}/>
			<FaCloud className="cloud-2" size={120}/>
			<FaCloud className="cloud-3" size={120}/>
			<FaCloud className="cloud-4" size={120}/>
			<FaCloud className="cloud-5" size={120}/>
      <div className='container'>
        
      <Navbar setDarkMode={setDarkMode} toggle={toggle} setToggle={setToggle}/>
    <div className="main-todo">
    <h1>What's your Todo list?</h1>
      <Form todos = {todos} setTodos = {setTodos} inputText = {inputText} setInputText={setInputText} setSelect={setSelect} />
      
      <Todolist todos = {todos} setTodos={setTodos} filter={filter}/>
    </div>
    </div>
    </div>
  );
}

export default Todopage;
