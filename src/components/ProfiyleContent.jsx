import react from 'react'
import s from './ProfiyleContent.module.css'

function ProfiyleContent() {
  return (
    <div className={s.content}>
      <div className={s.imgBack}></div>
      <div>
        <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" />
        <div> user comtent</div>
      </div>
    </div>
  )
}
export default ProfiyleContent
