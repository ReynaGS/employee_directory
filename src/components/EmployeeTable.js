import React from "react"; 
import EmployeeHeader from "./EmployeeHeader";
import EmployeeRow from "./EmployeeRow"



function EmployeeTable (props){
    // console.log(props)
    const employeeRows = props.employeeList.map((employee) =>
    {
        return (
            <EmployeeRow
            id = {employee.id}
            firstName= {employee.firstName}
            lastName={employee.lastName}
            title={employee.title}
            department={employee.department}
            phoneNumber={employee.phoneNumber}
            />
        )
    })
    return(

        <div>
            {/* {props.employeeList} */}
 <table className="table">
        <thead className="thead-dark">

        <EmployeeHeader/>

        </thead>
  
  <tbody>
     {employeeRows}
     
  </tbody>
</table>
        </div>
    )
}

export default EmployeeTable