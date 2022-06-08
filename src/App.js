import react from 'react'
import './App.css'
import Header from './components/Hedear/Hedear'
import Nav from './components/navBar/Nav-bar'
import SideBar from './components/SideBar/SideBar'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <SideBar />
    </div>
  )
}

export default App
