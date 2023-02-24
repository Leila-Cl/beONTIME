import './index.css';
import React, { useState } from 'react';

function StudentForm( {addComLog}){
  const[comment, setCom] = useState('');
  const[name, setName] = useState('');
 
 
  const handleSubmit = (e) => {
    console.log("In handleSubmit")
    addComLog([comment,name])
    e.preventDefault();
  }
  console.log("Student Comment", comment)
  return(
    <form onSubmit={e => {handleSubmit(e)}}>
      <label>Caption:</label>
      <br />
      <input
        name='comBox'
        type='text'
        value={ comment }
        onChange={e => setCom(
          e.target.value
        )}
        />
 
 
        <br />
 
 
        <label>Name:</label>
         <br />
 
 
        <input
          name='name'
          type='data'
          value={ name }
          onChange={e => setName(
            e.target.value
          )}
        />
 
 
        <br />
 
 
        <input
          type='submit'
          value='Comment'
          />
    </form>
  )
 }
 
 
 function ComChart(props){
  return(
    <table>
      <thead>
        <tr>
          <th>Name: </th>
          <th>Date: </th>
        </tr>
      </thead>
      <tbody>
      {props.coms.map((row) => {
        const [comment,name] = row
        return (
        <tr>
        <td>{comment}</td>
        <td>{name}</td>
      </tr>
        )
      })}
      </tbody>
 
 
    </table>
  );
 }
 
 
 function App() {
  const[comLog, setComLog] = useState([]);
 
 
  const addComLog = (log)=>{
    let logs = [...comLog, log]
    setComLog(logs)
  }
   console.log(comLog)

   return (
    <section>
      <StudentForm addComLog={addComLog} />
      <ComChart comment={comLog}></ComChart>
    </section>
  );
 } 
 
export default App;
