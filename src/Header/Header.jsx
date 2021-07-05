import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return(
    <>
    <div className="page-header">
        <h1>Hello{props.firstName}</h1> 
        <p>
        <Link to="/login">Logout</Link>
       </p>     
     </div>
       
    </> 
  )
}
export default Header;