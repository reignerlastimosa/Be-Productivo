import Navbar from "../components/Navbar";
import Kitty from "./kitty/kitty.jpg";
import { Link } from "react-router-dom";
const About = ({darkMode, setDarkMode ,toggle,setToggle}) =>{
    return(
        <div className={`${darkMode ? 'dark-mode' :'light-mode'}`}>

            <div className="container">
            <Navbar setDarkMode={setDarkMode} toggle={toggle} setToggle={setToggle}/>

            <div className="main-todo">
    <h1>This is About YOU!</h1>
        
        <div className="about">  
        <p>BeProd is a React App that helps users  be productive by providing a notes feature where users can save a note for reminders, to-do list feature where user can list their to-do plans, and scheduling feature where user can create, update, and delete their daily routine schedule. This project was created using React JS, React hooks, React Router DOM, Node SASS, LocalStorage, and Html5. Icons used were from React-icons library. I hope this may be useful. Be productive and have fun!</p>
        </div>

        <div className="source-code">
            <h2>Source Code:</h2>
          <Link to="https://github.com/reignerlastimosa/Be-Productivo"> <img src={Kitty}/> </Link>
            
        </div>

        <p className="credits">Made by Reigner Lastimosa</p>
    </div>

            </div>
        </div>
    )
}

export default About;