import { createSignal } from 'solid-js'
import './App.css'

const [count, setCount] = createSignal(0)
function App() {
  const handleClick = () => setCount(count() + 1)
  return <button onClick={handleClick}>{count()}</button>
}

export default App
