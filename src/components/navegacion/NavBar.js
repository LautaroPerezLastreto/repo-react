import React from 'react'
import CartWidgets from '../CartWidgets'
import {NavLink} from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <NavLink to="/">
      <img src='./titulo-allfitness.jpg' width={50}/>
    </NavLink>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/categoria/films">Films</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/categoria/series">Series</NavLink>
        </li>
        <li>
          <NavLink className='nav-link' to = "/cart"><CartWidgets/> </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar;