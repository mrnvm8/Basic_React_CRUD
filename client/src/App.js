import './App.css';
import FormInput from './components/FormInput';
import {useState} from 'react'
import Axios from 'axios';

function App() {
   //List of State 
   const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    grade: '',
  });
 
  //Create an input array 
  const inputs = [
    {
    id: 1,
    name: 'firstName',
    type: 'text',
    placeholder: 'First Name',
    label : 'First Name',
    },
    {
      id: 2,
      name: 'lastName',
      type: 'text',
      placeholder: 'Last Name',
      label : 'Last Name',
    },
    {
        id: 3,
        name: 'gender',
        type: 'text',
        placeholder: 'Gender',
        label : 'Gender',
    },
    {
      id: 4,
      name: 'grade',
      type: 'text',
      placeholder: 'Grade',
      label : 'Grade',
    }
  ]; 
 
  const onChangeHandler = (e) =>{
    setValues({...values, [e.target.name]: e.target.value});
  }

  const handlerSubmit =()=>{
    Axios.post('http://localhost:3001/create', {
      inputs : values
    }).then(()=>{
      console.log('Successfully Created')
    });
  }

  return (
    <div className="App">
      <form>
        {inputs.map((input) =>(
           <FormInput 
           key={input.id}
           {...input} 
           value={values[input.name]}
           onChange ={onChangeHandler}/>
        ))}
        <button type="button" class="btn btn-success" onClick={handlerSubmit}>Create</button>
      </form>
     
    </div>
  );
}

export default App;
