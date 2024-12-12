import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-white w-[75%] h-full'>
          <div className="sec1">
            <text className='text-[120px] automate-fadeIn'>Hey Text</text>
            <text className='text-[120px] automate-fadeIn'></text>
          </div>
          <div className='sec2'></div>
          <div className='sec3'></div>
          <div className='sec4'></div>
          <div className='sec5'></div>
        </div>
    </>
  )
}

export default App
