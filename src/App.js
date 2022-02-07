import react from 'react'
import './App.css'
import Header from './components/Hedear'
import Nav from './components/Nav-bar'
import ProfiyleContent from './components/ProfiyleContent'

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
