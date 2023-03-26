import React from 'react'
import { NavLink } from 'react-router-dom'


const NavMenu = () => {
  return (
    <div>
       <NavLink to="/">Read List</NavLink>
       <NavLink to="/create">Read List</NavLink>
    </div>
  )
}

export default NavMenu