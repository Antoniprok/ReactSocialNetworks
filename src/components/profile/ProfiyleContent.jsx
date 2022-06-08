import react from 'react'
import MyPosts from './myPosts/myPosts'
import s from './ProfiyleContent.module.css'

function ProfiyleContent() {
  return (
    <div className={s.content}>
      <div className={s.imgBack}></div>
      <div>
        <img src="https://cdn.novyny.live/images/thumbnail/original/crazy-frog.webp" />
        <div> user comtent</div>
      </div>
      <MyPosts />
    </div>
  )
}
export default ProfiyleContent
