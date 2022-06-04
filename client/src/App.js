import './App.css';
import Create from './components/Create/create';
import Read   from './components/Read/read';
import Update from './components/Update/update';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return ( <Router>
    <div className="App">
      <div>
        <h1 className="App-header">React CRUD Application with JS API </h1>
      </div>
      {/* In the new version of React Route needs to be used as a child route 
          so that why am raping the route inside Routes  
        */
      }
      <Routes>
        {/* In the new version of React component needs to be replaced with with element 
        because otherwise it will not reference the routed component and use the reference as TAG */}
        <Route path='/create' element ={<Create/>}/>
        <Route path='/' element ={<Read/>}/>
        <Route path='/update' element ={<Update/>}/>
      </Routes>
  
    </div>
  </Router>
);
}

export default App;
