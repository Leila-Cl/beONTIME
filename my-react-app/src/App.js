import React, {useState, useEffect} from 'react';
import { studentProf } from './studentDict'

// const timer = () => {
//     let year = new Date().getFullYear();
//     const difference = +new Date(`03/08/2023`) - +new Date();

//     let timeLeft = {};

//      if (difference > 0) {
//         timeLeft = {
//           hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//           minutes: Math.floor((difference / 1000 / 60) % 60),
//           seconds: Math.floor((difference / 1000) % 60)}

// };

// return timeLeft;}

// const [timeLeft, setTimeLeft] = useState(timer());

// useEffect(() => {
//     const time = setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearTimeout(timer);
// })

// const timerComponents = [];

const attendanceMark = () =>{
  const[attendance,setAttendance] = useState(false);
  const changeAttendance =()=>
    {setAttendance((prevState)=> !prevState);}
    {attendance ? "Here":"Not Here"};
};
return <button onClick={changeAttendance}>{attendance}</button>

onst[tardy,setTardy] = useState(false);
  
  
function App(props) {

  return (
    <div>
      <div id="cooperProf">
      <div class="studProf">
           {studentProf["Cooper"]["Name"]}
           {studentProf["Cooper"]["Comm"]} 
           {studentProf["Cooper"]["Photo"]}</div>
          
          <h2 onClick={()=>setTardy((prevState)=> !prevState)}>
            Mark as Tardy: {tardy ? "Tardy":"Not Tardy"}</h2>
            </div>

    <div id="juliaProf">
        <div class="studProf">
          {studentProf["Julia"]["Name"]}
          {studentProf["Julia"]["Comm"]} 
          {studentProf["Julia"]["Photo"]}</div>
          <h2 onClick={()=>setAttendance((prevState)=> !prevState)}>
           Mark as Attended: {attendance ? "Here":"Not Here"}
           </h2>
          
          <h2 onClick={()=>setTardy((prevState)=> !prevState)}>
            Mark as Tardy: {tardy ? "Tardy":"Not Tardy"}</h2>
            </div>
        
        
        <div id="leilaProf">
        <div class="studProf">
          {studentProf["Leila"]["Name"]}
          {studentProf["Leila"]["Comm"]} 
          {studentProf["Leila"]["Photo"]}
          </div>
          <h2 onClick={()=>setAttendance((prevState)=> !prevState)}>
           Mark as Attended: {attendance ? "Here":"Not Here"}
           </h2>
          
          <h2 onClick={()=>setTardy((prevState)=> !prevState)}>
            Mark as Tardy: {tardy ? "Tardy":"Not Tardy"}</h2>
            </div>
            </div>
  );
}

export default App;