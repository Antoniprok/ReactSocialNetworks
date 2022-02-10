import react from 'react'
import s from './Nav-bar.module.css'

function Nav() {
  return (
    <nav className={s.nav}>
      <div>
        <a href="/profile" className={`${s.item} ${s.active}`}>
          profile
        </a>
      </div>
      <div>
        <a href="/massege" className={s.item}>
          maseges
        </a>
      </div>
      <div>
        <a href="/News" className={s.item}>
          news
        </a>
      </div>
      <div>
        <a href="/Music" className={s.item}>
          music
        </a>
      </div>
      <div>
        <a href="Photo" className={s.item}>
          photo
        </a>
      </div>
    </nav>
  )
}
export default Nav
