import logo from './logo.svg'
import './App.css'
import HooksForm from './component/HooksForm'

import { useEffect, useState } from 'react'

function App() {
  const [initData, setInitData] = useState([])
  useEffect(() => {
    import('./meta.json').then((res) => {
      console.log(res)
      //sort by order
      setInitData(
        res.modal.sort((a, b) => {
          return a.order - b.order
        })
      )
    })
  }, [])

  return (
    <div className="App">
      <HooksForm initData={initData} />
    </div>
  )
}

export default App
