import React from "react"; 
import EmployeeTable from "./EmployeeTable";

class Wrapper extends React.Component {
    state = {
        employeeList: this.props.employeeList,
        filterValue: "",
        sortType:"Ascending",
        sortBy: "name",
        filterBy:"name"
    };
    handleSort = () => {
        var x; 
        if(this.state.sortBy==="id")
        {
            x = this.state.employeeList.sort((a, b) => a.id - b.id)
        }else if(this.state.sortBy==="name"){
            x = this.state.employeeList.sort((a, b) => a.firstName.localeCompare(b.firstName))

        }else if(this.state.sortBy==="department"){
            x = this.state.employeeList.sort((a, b) => a.department.localeCompare(b.department))
        }
        var newSortType; 
        if(this.state.sortType==="Ascending"){
            newSortType = "Descending";
        }else {
            x = x.reverse()
            newSortType = "Ascending";
        }

      
        this.setState({employeeList:x, sortType:newSortType})

    };
    handleFilter = () => {
        var z; 
        console.log(this.props.employeeList)
        if(this.state.filterValue === ""){
           
            
            this.setState({employeeList: this.props.employeeList})
            return
        }
        if(this.state.filterBy === "department"){
        z = this.state.employeeList.filter((employee) => {

            return(employee.department === this.state.filterValue)
        })
        } else if(this.state.filterBy === "name"){
            z = this.state.employeeList.filter((employee) => {

                return (employee.firstName === this.state.filterValue)
            })

        }else if(this.state.filterBy === "id"){
            z= this.state.employeeList.filter((employee) => {
                return (employee.id == this.state.filterValue)

            })
        }
        this.setState({employeeList:z})
    }; 
    handleChange = (e) => {
    this.setState({ filterValue: e.target.value });
    };
    handleSelect = (e) => {
        // console.log(e.target.value);
        this.setState({ sortBy: e.target.value });
    };
    handleFilterDrop = (e) => {
        // console.log(e.target.value);
        this.setState({ filterBy: e.target.value });
    };


    render(){
        return(
            <div>
                <div>
                    <label>Sort By:</label>

                    <select name="employee_sort" id="sortvalues" onChange={this.handleSelect}>
                        <option selected="selected" value="name">First Name</option>
                        <option value="department">Department</option>
                        <option value="id">ID</option>
                        
                    </select>
                </div>
                <div>
        <button type="button" className="btn btn-secondary " onClick={this.handleSort}>Sort {this.state.sortType}</button>

                </div>

                <div>
                    <label>filter By:</label>

                    <select name="employee_sort" id="sortvalues" onChange={this.handleFilterDrop}>
                        <option selected="selected" value="name">First Name</option>
                        <option value="department">Department</option>
                        <option value="id">ID</option>

                    </select>
                </div>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={this.handleChange} placeholder={"Filter " + this.state.filterBy} aria-label="Recipient's username" aria-describedby="button-addon2"/>
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