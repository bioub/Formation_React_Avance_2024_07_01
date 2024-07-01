import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './Clock'
import Select from './Select'

const names = ['Toto', 'Titi', 'Tata'];

function App() {

  const selectRef = useRef();
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Titi');

  const [showClock, setShowClock] = useState(true);
  const [delay, setDelay] = useState(1000);
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>Delay : <input type="number" value={delay} onChange={(e) => setDelay(e.target.valueAsNumber)} /></p>
      <button onClick={() => setShowClock(!showClock)}>{showClock ? 'Hide' : 'Show'} Clock</button>
      {showClock && <Clock delay={delay} />}


      <Select items={names} value={name} onValueChange={setName} renderItem={(item) => <><input type="checkbox" defaultChecked={item === name} /> {item}</>} ref={selectRef} />
      <p>Prénom sélectionné : <span className="selected">{name}</span></p>

      <button onClick={() => { selectRef.current?.openMenu() }}>Open menu</button>
    </>
  )
}

export default App
