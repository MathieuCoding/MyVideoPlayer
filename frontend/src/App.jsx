import { useState } from 'react'
import './App.css'
import { Uploader } from './components/Uploader';
import { VideoPlayer } from './components/videoPlayer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-center" id="main-title">My Video Player</h1>
      <Uploader />
      {/* <FileList /> */}
      <VideoPlayer />
    </div>
  )
}

export default App
