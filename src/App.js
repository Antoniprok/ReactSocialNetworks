import react from 'react'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Hedear/Hedear'
import Nav from './components/navBar/Nav-bar'
import ProfiyleContent from './components/profile/ProfiyleContent'

function App() {
  return (
    <div className="App-wrapper">
      <Header />
      <Nav />
      <div class="content">
        <Dialogs />
      </div>
      {/* <ProfiyleContent /> */}
    </div>
  )
}

export default App
