import { useState } from "react"
import DataComponent from "./components/DataComponent"
import DataComponentTwo from "./components/DataComponentTwo"
import RefetchButton from "./components/RefetchButton"
import UseEffectComponent from "./components/UseEffectComponent"
import { usePosts } from "./ReactQueries"

function App() {
  const [dataComponent, setDataComponent] = useState(false)
  const [dataComponentTwo, setDataComponentTwo] = useState(false)
  const [useEffectComponent, setUseEffectComponent] = useState(false)

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
      <button
        onClick={() => {
          setUseEffectComponent((value) => !value)
        }}
      >
        Toggle useEffect component
      </button>
      <RefetchButton />
      {dataComponent && <DataComponent />}
      {dataComponentTwo && <DataComponentTwo />}
      {useEffectComponent && <UseEffectComponent />}
    </div>
  )
}

export default App
