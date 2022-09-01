import React from 'react'
import CartWidgets from '../CartWidgets'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link to="/">
      <img src='./titulo-allfitness.jpg' width={50}/>
    </Link>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/creatina">Creatines</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/proteina">Proteins</Link>
        </li>
        <li>
          <Link className='nav-link' to = "/"><CartWidgets/> </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar;