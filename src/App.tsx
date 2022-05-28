import { useCounter } from './hooks/useCounter'
import './App.css'

function App() {
  const { count, increment, decrement } = useCounter()

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>count is: {count}</p>
        <p>
          <button
            type="button"
            onClick={increment}
          >
            +
          </button>
          <button
            type="button"
            onClick={decrement}
          >
            -
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
