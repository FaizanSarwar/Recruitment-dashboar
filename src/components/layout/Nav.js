import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (

    <div className="container ">
      <nav className="navbar navbar-expand-lg bg-light navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{"color":"Green"}}>
            My Recuirtments
          </Link>

          <div className="collapse d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <i class="bi bi-bell" style={{"fontSize":"1.9rem", "marginRight":"10px","color":"red"}}></i>
              </li>
              <li className="nav-item">
              <i class="bi bi-person-circle" style={{"fontSize":"1.9rem", "marginRight":"10px","color":"blue"}}></i>
              </li>
              <li className="nav-item">
                <a className="nav-link"  style={{"color":"black","fontSize":"1.2rem"}}>
                  Zapta
                </a>
              </li>
            </ul>
          </div>
        </div>
       
      </nav>
   
       <Link className="btn btn-outline-warning p-2 mt-2 float-end text-black" to="/add">Add New User</Link>
    </div>
    
  );
}

export default Nav;
