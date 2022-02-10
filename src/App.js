import react from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Hedear/Hedear'
import Music from './components/Music/Music'
import Nav from './components/navBar/Nav-bar'
import News from './components/News/News'
import Photo from './components/Photo/Photo'
import ProfiyleContent from './components/profile/ProfiyleContent'

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        <div class="content">
          <Routes>
            <Route path="massege" element={<Dialogs />} />
            <Route path="profile" element={<ProfiyleContent />} />
            <Route path="Music" element={<Music />} />
            <Route path="News" element={<News />} />
            <Route path="Photo" element={<Photo />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
