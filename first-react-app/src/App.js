import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';

function App() {
  return (
    <div className="App">
      
      <p>Class Components</p>
      <ClassComponent />
      <br></br>

      <p>Function Components</p>
      <FunctionComponent />
    </div>
  );
}

export default App;
