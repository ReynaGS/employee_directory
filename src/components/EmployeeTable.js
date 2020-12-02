import React from "react"; 
import EmployeeRow from "./EmployeeRow"


function EmployeeTable (){
    return(
        <div>
        <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Id Number</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Title</th>
      <th scope="col">Department</th>
      <th scope="col">Phone Number</th>
    </tr>
  </thead>
  <tbody>
     <EmployeeRow/>
     <EmployeeRow />
  </tbody>
</table>


        </div>
    )
}

export default EmployeeTable