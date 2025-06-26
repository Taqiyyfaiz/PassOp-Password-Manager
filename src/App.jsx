import { useState } from 'react'
import Navbar from './Components/Navbar'
import Manager from './Components/Manager'
import Footer from './Components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <div className='min-h-[87vh]'>
      <Manager />
    </div>
    <Footer />
    </>
  )
}

export default App
