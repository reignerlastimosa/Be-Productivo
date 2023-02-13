import { AiFillLike } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";



import { useState } from 'react';
const Schedule = ({title,time,day, sched, schedule, setSchedule, }) =>{
    
    
   const[editTitle,setEditTitle] =useState("")
   const[editTime,setEditTime] =useState("")
    
    const[edit, setEdit] = useState(false);

   const deleteSchedule =() =>{
    setSchedule(schedule.filter(s=> s.id !== sched.id));
   
   }


  
   const editedSchedule = (id) =>{

   
    if(editTitle ===""){
        alert("Please type your schedule");
    } else if(editTime === "") {
        alert("Please choose the time for your schedule");
    }else{
        const updatedSchedule = [...schedule].map((sas)=>{
            if(sas.id === id){
                sas.title = editTitle;
                sas.time = editTime;
            }
            return sas;
        })
        setSchedule(updatedSchedule);
        
        setEdit((a)=> !a);
    }

          
   }


  

   
   

    return(
        <div className= {`${!edit ? 'schedule' : 'editSchedule' }`}>
             
            <div className="invi-edit">   
             <h5>Edit "{title}"</h5>
             <input type="text" placeholder="Edit schedule" onChange={(e)=>setEditTitle(e.target.value)} value={editTitle}/>
             <input type="time"  onChange={(e)=>setEditTime(e.target.value)} value={editTime}/>
            <button onClick={()=>editedSchedule(sched.id)}> <FaCheckCircle size={18} color="green"/></button>
            </div>

            <h4>{title}</h4>

            <p>{time}</p>
            

            <div className ="schedule-btn">   
            <button onClick={()=> setEdit(true)}><FaEdit size={18} color="green"/></button>
            <button onClick={deleteSchedule}><AiFillDelete size={18} color="red"/></button>
            </div>
            
           
        </div>
    )
}

export default Schedule;
