import React from "react";

import { FaPlusCircle} from 'react-icons/fa';
const ScheduleForm = ({inputSchedule,setInputSchedule, schedule, setSchedule, inputTime, setInputTime, inputDay, setInputDay}) =>{

   const changeInputSchedule = (e) =>{
    setInputSchedule(e.target.value);
    
   }

   const changeInputTime = (e) =>{
    setInputTime(e.target.value);
    
   }

   const changeInputDay= (e) =>{
    setInputDay(e.target.value);
    
   }

   const submitSchedule = (e) =>{
    e.preventDefault();
    if(inputSchedule ===""){
        alert("Please type your schedule");
    } else if(inputTime === "") {
        alert("Please choose the time for your schedule");
    }  else if(inputDay ==="none") {
        alert("Please choose the day for your schedule");
    }else{
        setSchedule([...schedule, {id: Math.random() * 100, title : inputSchedule, time :inputTime, day:inputDay }])
        setInputSchedule("");
    }
   
   }

    return(
        <form>
            <input type="text" placeholder="type to create schedule.." onChange={changeInputSchedule} value={inputSchedule}/>
            


            <br/>
            <br/>
            <div className="schedule-functions">
                <select onChange={changeInputDay}>
                    <option selected value="none">Select Day:</option>
                    <option value="mon">Monday</option>
                    <option value="tues">Tuesday</option>
                    <option value="wed">Wednesday</option>
                    <option value="thurs">Thursday</option>
                    <option value="fri">Friday</option>
                    <option value="sat">Saturday</option>
                    <option value="sun">Sunday</option>
                </select>

                <input type="time" onChange={changeInputTime}/>
                <button className="create" onClick={submitSchedule}>Create</button>
            </div>
        </form>
    )
}

export default ScheduleForm;