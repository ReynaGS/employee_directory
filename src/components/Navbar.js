import React from "react"; 
const navBarColor = {
    backgroundColor : "teal", 
       
}

function Navbar (){
    return(
        <div>
            <nav className="navbar" style= {navBarColor}>
                <span className="navbar-brand mb-0 h1">Employee List</span>
            </nav>
        </div>
    )
}
 export default Navbar