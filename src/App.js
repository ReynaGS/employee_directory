import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'; 
import Wrapper from './components/Wrapper';
import empleados from './employeeList.json'


function App() {
  console.log(empleados);
  return (
    <div className="App">
      <Navbar/>
      <Wrapper
      employeeList = {empleados}/>
 
    </div>
  );
}

export default App;
