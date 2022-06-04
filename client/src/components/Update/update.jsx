import React, {useState, useEffect, Component} from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FloatingLabel, Form } from 'react-bootstrap';


export default function Update() {

  const localId =  localStorage.getItem('ID')

  //use this for directing to read after create submission
  const navigate = useNavigate();

   //List of State 
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [gender, setGender] = useState("");
   const [grade, setGrade] = useState("");

 
  //function for updating student information
  const UpdateStudent =()=>{
    Axios.put(`http://localhost:3001/update/${localId}`, {
      FirstName : firstName, 
      LastName: lastName, 
      Gender: gender, 
      Grade : grade
    }).then(()=>{
        console.log('Successfully Updated')
        navigate('/');  // this will be read bec
    });
  }

  //When the page is loads get data 
  //from database that is equal to the ID sent into the API
  useEffect(()=>{
    Axios.get(`http://localhost:3001/getStudent/${localId}`).then((response)=>{
      setFirstName(response.data[0].FirstName);
      setLastName(response.data[0].LastName);
      setGender(response.data[0].Gender);
      setGrade(response.data[0].Grade);
    });
  },[localId]);


  return (

      <div  className="form-group">
          <h4 className="CRUD-header">This is Update Form</h4>
      
          <FloatingLabel  className ="m-3" controlId="FirstName" label="First Name">
              <Form.Control type="text" value ={firstName} placeholder="First Name" 
              onChange={(e) =>{setFirstName(e.target.value)}}/>
          </FloatingLabel>

          <FloatingLabel className ="m-3" controlId="LastName" label="Last Name">
              <Form.Control type="text" value ={lastName} placeholder="Last Name" 
              onChange={(e) =>{setLastName(e.target.value)}}/>
          </FloatingLabel>

          <FloatingLabel className ="m-3" controlId="Gender" label="Gender">
              <Form.Control type="text" value ={gender} placeholder="Gender" 
              onChange={(e) =>{setGender(e.target.value)}}/>
          </FloatingLabel>

          <FloatingLabel className ="m-3" controlId="Grade" label="Grade">
              <Form.Control type="text" value ={grade} placeholder="Grade" 
              onChange={(e) =>{setGrade(e.target.value)}}/>
          </FloatingLabel>

          <button type="button" className=" btn-shape btn btn-success m-3" onClick = {UpdateStudent}>
            Update
          </button>
      </div>
  )
}
