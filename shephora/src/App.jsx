import { useState } from 'react'
import Upperpart from './component/navbar'
import Product from './component/product'
 import Arrivals from './component/Arrival'
 import Only from './component/final'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Upperpart/>
     <Product/>
     <Arrivals/>
     <Only/>
     
    </>
  )
}

export default App
