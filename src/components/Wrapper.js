import React from "react"; 
import EmployeeTable from "./EmployeeTable";

class Wrapper extends React.Component {
    state = {
        employeeList: this.props.employeeList
    };
    handleSort = () => {
        // We always use the setState method to update a component's state
        // this.setState({ count: this.state.count + 1 });
        // console.log("Han hecho un click")
        var x = this.state.employeeList.sort((a, b) => a.id - b.id)
      
        this.setState({employeeList:x})
    };
    render(){
        return(
            <div>

            <button type="button" className="btn btn-secondary " onClick={this.handleSort}>Sort By ID</button>

            <EmployeeTable
                employeeList={this.state.employeeList}
            />
            
            </div>

        )

    }
}
export default Wrapper