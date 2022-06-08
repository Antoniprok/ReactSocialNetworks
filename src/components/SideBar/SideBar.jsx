import react from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import '../../App.css'
import Dialogs from '../Dialogs/Dialogs'
import Music from '../Music/Music'
import News from '../News/News'
import Photo from '../Photo/Photo'
import ProfiyleContent from '../profile/ProfiyleContent'

function SideBar() {
  return (
    <div class="content">
      <Routes>
        <Route path="massege" element={<Dialogs />} />
        <Route path="profile" element={<ProfiyleContent />} />
        <Route path="Music" element={<Music />} />
        <Route path="News" element={<News />} />
        <Route path="Photo" element={<Photo />} />
      </Routes>
    </div>
  )
}

export default SideBar
