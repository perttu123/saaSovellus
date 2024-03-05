import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from 'https://media.istockphoto.com/id/1234991640/fi/vektori/energia-s%C3%A4hk%C3%B6-virtakuvake.webp?s=2048x2048&w=is&k=20&c=H3aA_2PjFRGbEfC6kEDNffefy6AA8IOrDyOD3hcqwrw='


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      {/* <img src={logo} alt="Logo" width="50" height="50" /> {/* Insert your logo here */}        
      <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;