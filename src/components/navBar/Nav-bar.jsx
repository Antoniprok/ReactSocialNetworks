import react from 'react'
import { NavLink } from 'react-router-dom'
import s from './Nav-bar.module.css'

function Nav() {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/massege"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          maseges
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/News"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          news
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/Music"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="Photo"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          photo
        </NavLink>
      </div>
    </nav>
  )
}
export default Nav
