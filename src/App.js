import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'; 
import EmployeeTable from './components/EmployeeTable';
import empleados from './employeeList.json'


function App() {
  console.log(empleados);
  return (
    <div className="App">
      <Navbar/>
      <EmployeeTable
      employeeList = {empleados}
      />
    </div>
  );
}

export default App;
