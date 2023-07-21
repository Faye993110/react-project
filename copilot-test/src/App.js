import logo from './logo.svg'
import './App.css'
import HooksForm from './component/HooksForm'

import { useEffect, useState } from 'react'

const initApi =
  'https://www.fastmock.site/mock/1e30667a4c6ab50c7eb19db9bd72c3c5/hooks/api/index'
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
