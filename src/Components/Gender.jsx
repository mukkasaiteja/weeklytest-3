import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Gender.css'

function Gender() {
    const [user,setUser]=useState([])
    const [state,setState]=useState()
  
  
    useEffect(()=>{
      axios.get('https://randomuser.me/api/?results=40')
        
        .then((data)=>{
            console.log(data.data.results);
            setUser(data.data.results)
            setState(data.data.results);
        })
    },[])
   
  return (
    <div >
     <div style={{marginLeft:"50%",padding:'20px'}}>
     <input type="radio" name="gender" id="" /><label>ALL</label>
      <input type="radio" name="gender" id=""  onChange={() => {
            setUser(state.filter((data) => data.gender === "male"));
          }} /><label>MALE</label>
      <input type="radio" name="gender" id="" 
       onChange={() => {
        setUser(state.filter((data) => data.gender === "female"));
      }} /><label>FEMALE</label>
     </div>
  
  
    <table style={{width:'80%'}} align='center' frame='box' rules='all'>

    <thead>
       {
        <tr style={{backgroundColor:"black",color:"white"}}>
        <th style={{padding:'20px'}}>image</th>
        <th>name</th>
        <th>Email</th>
        <th>gender</th>
       
        </tr>
       }
    </thead>
   <tbody>
    {
user.map((event)=>{


    return(
        <tr>
            <td className='nothing'><img src={event.picture.medium} height='100px' width='150px' alt="" /></td>
            <td>{event.name.first} {event.name.last} {event.name.title}</td>
            <td>{event.email}</td>
            <td>{event.gender}</td>
          
        </tr>
    )
})


    }
   </tbody>


    </table>


  



    </div>
  )
}

export default Gender