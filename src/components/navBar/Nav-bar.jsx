import react from 'react'
import { NavLink } from 'react-router-dom'
import s from './Nav-bar.module.css'

function Nav() {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? s.active : s.item)}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/massege"
          className={({ isActive }) => (isActive ? s.active : s.item)}
        >
          Masseges
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/News"
          className={({ isActive }) => (isActive ? s.active : s.item)}
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/Music"
          className={({ isActive }) => (isActive ? s.active : s.item)}
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="Photo"
          className={({ isActive }) => (isActive ? s.active : s.item)}
        >
          Photo
        </NavLink>
      </div>
    </nav>
  )
}
export default Nav
