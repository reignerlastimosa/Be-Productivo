import React from "react";
import Schedule from "./Schedule";

const Schedulelist = ({schedule,setSchedule, }) =>{
    return(
        <div className="schedulelist">
            <div className="monday">
            <h2>Monday</h2>
               {schedule.filter((s)=> s.day === "mon").map(sched => <Schedule key={sched.id} title={sched.title} time={sched.time} day={sched.day} sched={ sched} schedule={schedule} setSchedule={setSchedule} />)}
            </div>

            <div className="tuesday">
                <h2>Tuesday</h2>
            {schedule.filter((s)=> s.day === "tues").map(sched => <Schedule key={sched.id} title={sched.title} time={sched.time} day={sched.day} sched={ sched} schedule={schedule} setSchedule={setSchedule}/>)}
            </div>

            <div className="wednesday">
            <h2>Wednesday</h2>
            {schedule.filter((s)=> s.day === "wed").map(sched => <Schedule key={sched.id} title={sched.title} time={sched.time} day={sched.day} sched={ sched} schedule={schedule} setSchedule={setSchedule}/>)}
            </div>

            <div className="thursday">
            <h2>Thursday</h2>
            {schedule.filter((s)=> s.day === "thurs").map(sched => <Schedule key={sched.id} title={sched.title} time={sched.time} day={sched.day} sched={ sched} schedule={schedule} setSchedule={setSchedule}/>)}
            </div>

            <div className="friday">
            <h2>Friday</h2>
            {schedule.filter((s)=> s.day === "fri").map(sched => <Schedule key={sched.id} title={sched.title} time={sched.time} day={sched.day} sched={ sched} schedule={schedule} setSchedule={setSchedule}/>)}
            </div>

            <div className="saturday">
            <h2>Saturday</h2>
            {schedule.filter((s)=> s.day === "sat").map(sched => <Schedule key={sched.id} title={sched.title} time={sched.time} day={sched.day} sched={ sched} schedule={schedule} setSchedule={setSchedule}/>)}
            </div>

            <div className="sunday">
            <h2>Sunday</h2>
            {schedule.filter((s)=> s.day === "sun").map(sched => <Schedule key={sched.id} title={sched.title} time={sched.time} day={sched.day} sched={ sched} schedule={schedule} setSchedule={setSchedule}/>)}
            </div>

            
        </div>
    )
}


export default Schedulelist;