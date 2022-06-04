import React, {useState} from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FloatingLabel, Form } from 'react-bootstrap';

export default function Create() {
  //use this for directing to read after create submission
  const navigate = useNavigate();

   //List of State 
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [gender, setGender] = useState("");
   const [grade, setGrade] = useState("");
 
  //Create an input array 
  const CreateStudent =()=>{
    Axios.post('http://localhost:3001/create', {
      firstName : firstName, 
      lastName: lastName, 
      gender: gender, 
      grade : grade
    }).then(()=>{
        console.log('Successfully Created')
        navigate('/');  // this will be read bec
    });
  }

  return (

    <div className="form-group">
        <h4 className="CRUD-header">This is Create Form</h4>
        <FloatingLabel  className ="m-3" controlId="FirstName" label="First Name">
            <Form.Control type="text" placeholder="First Name" 
            onChange={(e) =>{setFirstName(e.target.value)}}/>
        </FloatingLabel>

        <FloatingLabel className ="m-3" controlId="LastName" label="Last Name">
            <Form.Control type="text" placeholder="Last Name" 
            onChange={(e) =>{setLastName(e.target.value)}}/>
        </FloatingLabel>

        <FloatingLabel className ="m-3" controlId="Gender" label="Gender">
            <Form.Control type="text" placeholder="Gender" 
            onChange={(e) =>{setGender(e.target.value)}}/>
        </FloatingLabel>

        <FloatingLabel className ="m-3" controlId="Grade" label="Grade">
            <Form.Control type="text" placeholder="Grade" 
            onChange={(e) =>{setGrade(e.target.value)}}/>
        </FloatingLabel>

        <button type="button" className=" btn-shape btn btn-success m-3" onClick = {CreateStudent}>
          Create
        </button>
    </div>
  )
}
