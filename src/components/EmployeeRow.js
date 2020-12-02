import React from "react";

function EmployeeRow(props){
    return(

        <tr>
            <td>{props.id}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.title}</td>
            <td>{props.department}</td>
            <td>{props.phoneNumber}</td>
        </tr> 
    )

}

export default EmployeeRow