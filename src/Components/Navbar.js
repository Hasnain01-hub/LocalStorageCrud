import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <div class="nav">
            <input type="checkbox" id="nav-check" />
            <div class="nav-header">
                <div class="nav-title">
                    LOCAL STORAGE CRUD
                </div>
            </div>
            <div class="nav-btn">
                <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
                </label>
            </div>
            {/* You can Add Navbar links here */}
            <div class="nav-links">
                <Link to="/add-form">Add Data</Link>
                <Link to="/">About Us</Link>
            </div>
        </div>
    </>
  )
}

export default Navbar;