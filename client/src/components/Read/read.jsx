import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';
import Axios from 'axios';
import  { Link } from 'react-router-dom'


export default function Read() {
  
  localStorage.setItem('ID', 0);

  const [readStudent, setReadStudent] = useState([]);

  //This function is for Reading data from database table
  const ReadStudent =()=>{
    Axios.get('http://localhost:3001/students').then((response)=>{
      setReadStudent(response.data);
    });
  }
  //This a function for Delete Student by on the Student Id
  const DeleteStudent =(id)=>{
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response)=>{
      console.log(response.data);
      ReadStudent();
    });
  }
  const setID =(id) =>{
    localStorage.setItem('ID', id);
  }

  useEffect(() =>{
    ReadStudent();
  },[]);

  return (
    <div>
      <div className="CRUD-header">Student List</div>
    <div className="table-responsive custom-table-responsive mx-auto">
      <Table striped bordered hover className ="m-3">
        <thead >
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Grade</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {readStudent.map((value)=>(
              <tr key={value.Student_Id}>
                <td>{value.FirstName}</td>
                <td>{value.LastName}</td>
                <td>{value.Gender}</td>
                <td>{value.Grade}</td>
                <td>
                  <Link to='/update'>
                    <button 
                      className="btn-shape btn btn-primary"
                      onClick ={()=> setID(value.Student_Id)}>
                      Update
                    </button>
                  </Link>
                </td>
                <td>
                  <button className=" btn-shape btn btn-danger" 
                  onClick={()=> DeleteStudent(value.Student_Id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Link to='/create'>
        <button type="button" className =" btn-shape btn btn-success m-2">Create Student</button>
      </Link>
      </div>
    </div>
  )
}
