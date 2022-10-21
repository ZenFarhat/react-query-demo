import { useState } from "react"
import DataComponent from "./components/DataComponent"
import DataComponentTwo from "./components/DataComponentTwo"
import RefetchButton from "./components/RefetchButton"

function App() {
  const [dataComponent, setDataComponent] = useState(true)
  const [dataComponentTwo, setDataComponentTwo] = useState(false)

  return (
    <div className="App">
      <button
        onClick={() => {
          setDataComponent((value) => !value)
        }}
      >
        Toggle Component 1
      </button>
      <button
        onClick={() => {
          setDataComponentTwo((value) => !value)
        }}
      >
        Toggle Component 2
      </button>
      <RefetchButton />
      {dataComponent && <DataComponent />}
      {dataComponentTwo && <DataComponentTwo />}
    </div>
  )
}

export default App
