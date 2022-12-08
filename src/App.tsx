import hummingBird from './assets/images/hb.png'
import './App.css'
import { TagBar } from './Components/TagBar'

function App () {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={hummingBird} className="logo" alt="Humming bird"/>
        </a>
      </div>
    
      <h1>My Flutter Journey</h1>
    
      <TagBar/>
    
      <div className="card">
        <p className="intro">This is my nth attempt to learn Flutter. In this space I'll share my learnings as they come
                             to me</p>
      </div>
    </div>
  )
}

export default App
