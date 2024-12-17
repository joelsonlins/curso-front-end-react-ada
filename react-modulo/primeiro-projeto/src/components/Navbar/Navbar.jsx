import React from 'react';
import "./styles.css"

export function Navbar(){

  return (
    <header>
    <nav id="navbar">
      <div className="nav-brand">
        <img src="https://cdn-icons-png.flaticon.com/512/360/360808.png" alt="" />
        <h1>Space Flight News</h1>
        </div>
        <div>
        <ul className="nav-list">
        <li><a href="https://www.example.com">Home</a></li>
        <li><a href="https://www.example.com">Trending</a></li>
        <li><a href="https://www.example.com">Categories</a></li>
        <li><a href="https://www.example.com">About us</a></li>
        </ul>
      </div>
    </nav>

    
   </header>
  )
}

