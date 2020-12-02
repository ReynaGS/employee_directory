import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'; 
import EmployeeTable from './components/EmployeeTable'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <EmployeeTable/>
    </div>
  );
}

export default App;
