import ScheduleForm from '../components/ScheduleForm';
import Schedulelist from '../components/Schedulelist';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import { BsFillMoonStarsFill} from "react-icons/bs";
import { BsStars} from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
function Schedule({darkMode, setDarkMode ,toggle,setToggle}) {

  const [inputSchedule,setInputSchedule] = useState("");
  const[schedule, setSchedule] = useState([]);
  const[inputTime, setInputTime] = useState("");
  const[time,setTime] = useState("");
  const[inputDay,setInputDay] =useState("");
  
  useEffect(() => {
		const savedSchedule = JSON.parse(localStorage.getItem('notes')
		);

		if (savedSchedule) {
			setSchedule(savedSchedule);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem( 'notes', JSON.stringify(schedule));
	}, [schedule]);


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
    <h1>Setup your daily routine schedule!</h1>
      <ScheduleForm inputSchedule={inputSchedule} setInputSchedule={setInputSchedule} schedule={schedule} setSchedule={setSchedule} inputTime ={inputTime} setInputTime = {setInputTime} time={time} setTime={setTime} inputDay ={inputDay} setInputDay={setInputDay}/>
      
      <Schedulelist schedule={schedule} setSchedule={setSchedule}/>
    </div>
    </div>
    </div>
  );
}

export default Schedule;