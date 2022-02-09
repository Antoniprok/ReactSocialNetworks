import react from 'react'
import s from './Nav-bar.module.css'

function Nav() {
  return (
    <nav className={s.nav}>
      <div>
        <a className={`${s.item} ${s.active}`}>pofile</a>
      </div>
      <div>
        <a className={s.item}>maseges</a>
      </div>
      <div>
        <a className={s.item}>news</a>
      </div>
      <div>
        <a className={s.item}>music</a>
      </div>
      <div>
        <a className={s.item}>photo</a>
      </div>
    </nav>
  )
}
export default Nav
