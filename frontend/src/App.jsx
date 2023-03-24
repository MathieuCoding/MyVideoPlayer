import { useState } from 'react'
import './App.css'
import { Uploader } from './components/Uploader';
import { VideoPlayer } from './components/videoPlayer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-center">My Video Player</h1>
      <Uploader />
      <VideoPlayer />
    </div>
  )
}

export default App
