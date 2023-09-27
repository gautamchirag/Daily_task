// import React from 'react'
import './header.css';
function Header() {
  return (
    <header className="Header">
      <nav className="navbar">
        <div className="nav-content-div">
          <div className="nav-content">
            <h1>FOOD ZONE</h1>
            <input type="text" placeholder="Search food..."></input>
          </div>
        </div>
        <div className="nav-lists">
          <ul>
            <li>
              <a>all</a>
            </li>
            <li>
              <a>breakfast</a>
            </li>
            <li>
              <a>lunch</a>
            </li>
            <li>
              <a>dinner</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
