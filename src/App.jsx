import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Stopwatch from './Stopwatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Stopwatch/>

    </>
  )
}

export default App
