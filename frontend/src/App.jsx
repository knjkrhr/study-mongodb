import { useState, useEffect } from 'react'
import './App.css'
import DataViewer from "./components/DataViewer.jsx";

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8000/')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error:', error)
        setLoading(false)
      })
  }, [])

  return (
    <div className="App">
      <h1>MongoDB Study App</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
          // <pre>{JSON.stringify(data, null, 2)}</pre>
          <DataViewer v={data} />
      )}

    </div>
  )
}

export default App
