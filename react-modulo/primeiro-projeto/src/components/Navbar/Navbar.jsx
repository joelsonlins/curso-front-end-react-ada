import React from 'react';
import "./styles.css"

class Navbar extends React.Component{
render(){
  return (
    <header>
    <nav id="navbar">
      <div className="nav-brand">
        <img src="https://cdn-icons-png.flaticon.com/512/360/360808.png" alt="" />
        <h1>Space Flight News</h1>
        </div>
        <div>
        <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">Trending</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">About us</a></li>
        </ul>
      </div>
    </nav>

    
   </header>
  )

}
}

export default Navbar;