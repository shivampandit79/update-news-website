import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/General">
            New Monkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item mx-2"><Link className="nav-link active" to="/General">General</Link></li>
                      <li className="nav-item mx-2"><Link className="nav-link active" to="/Business">Business</Link></li>
                      <li className="nav-item mx-2"><Link className="nav-link active" to="/Entertainment">Entertainment</Link></li>
                      <li className="nav-item mx-2"><Link className="nav-link active" to="/Health">Health</Link></li>
                      <li className="nav-item mx-2"><Link className="nav-link active" to="/Science">Science</Link></li>
                      <li className="nav-item mx-2"><Link className="nav-link active" to="/Sports">Sports</Link></li>
                      <li className="nav-item mx-2"><Link className="nav-link active" to="/Technology">Technology</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  } 
}

export default NavBar;
