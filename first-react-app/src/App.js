import './App.css';
// import ClassComponent from './component/ClassComponent';
import ClassComponent from './pages/ClassComponent';
// import FunctionComponent from './component/FunctionComponent';
import FunctionComponent from './pages/FunctionComponent';
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
//* HOC Layout
import BaseHoc from './hoc/BaseHoc';

function App() {
  const author = "Aditi";
  const [name, setName] = useState("Star");
  
  return (
    <Routes>
      <Route path='/' element={<BaseHoc><ClassComponent /></BaseHoc>} />
      <Route path='/functional-component' element={<BaseHoc><FunctionComponent 
      name={name}
      age={20}
      author={author}
      setName={setName}
      /></BaseHoc>} />
    </Routes>
  )

  // return (
    // <div className="App">
      
    //   <p>Class Components</p>
    //   <ClassComponent />
    //   <br></br>

    //   <p>Function Components</p>
    //   {/* <FunctionComponent name = 'Star' age = {20} author = {author} /> */}
    //   <FunctionComponent name = {name} age = {20} author = {author} setName = {setName} ></FunctionComponent>
    // </div>

  // );
}

export default App;
