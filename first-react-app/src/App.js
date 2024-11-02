import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';
import { useState } from 'react';

function App() {
  const author = "Aditi";
  const [name, setName] = useState("Star");

  return (
    <div className="App">
      
      <p>Class Components</p>
      <ClassComponent />
      <br></br>

      <p>Function Components</p>
      {/* <FunctionComponent name = 'Star' age = {20} author = {author} /> */}
      <FunctionComponent name = {name} age = {20} author = {author} setName = {setName} ></FunctionComponent>
    </div>
  );
}

export default App;
