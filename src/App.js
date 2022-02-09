import react from 'react'
import './App.css'
import Header from './components/Hedear/Hedear'
import Nav from './components/navBar/Nav-bar'
import ProfiyleContent from './components/profile/ProfiyleContent'

function App() {
  return (
    <div className="App-wrapper">
      <Header />
      <Nav />
      <ProfiyleContent />
    </div>
  )
}

export default App
