import react from 'react'
import MyPosts from './myPosts/myPosts'
import s from './ProfiyleContent.module.css'

function ProfiyleContent() {
  return (
    <div className={s.content}>
      <div className={s.imgBack}></div>
      <div>
        <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" />
        <div> user comtent</div>
      </div>
      <MyPosts />
    </div>
  )
}
export default ProfiyleContent
