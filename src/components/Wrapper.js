import React from "react"; 
import EmployeeTable from "./EmployeeTable";

class Wrapper extends React.Component {
    state = {
        employeeList: this.props.employeeList,
        filterValue: ""
    };
    handleSort = () => {
        var x = this.state.employeeList.sort((a, b) => a.id - b.id)
      
        this.setState({employeeList:x})
    };
    handleFilter = () => {
         
        var z = this.state.employeeList.filter((employee) => {

            return(employee.department === this.state.filterValue)
        })
        this.setState({employeeList:z})
    }; 
    handleChange = (e) => {
    this.setState({ filterValue: e.target.value });
    };


    render(){
        return(
            <div>

            <button type="button" className="btn btn-secondary " onClick={this.handleSort}>Sort By ID</button>

                

                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={this.handleChange} placeholder="Filter By Department" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <div className="input-group-append">
                        <button className="btn btn-outline-secondary" onClick={this.handleFilter} type="button" id="button-addon2">Filter</button>
                        </div>
                </div>


            <EmployeeTable
                employeeList={this.state.employeeList}
            />
            
            </div>

        )

    }
}
export default Wrapper