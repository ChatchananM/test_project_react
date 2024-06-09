import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import lekPicture from './assets/Lek_pic9.jpg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={lekPicture} className="logo react w-2/4 rounded-full" alt="Lek Picture" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="text-cyan-800 bg-orange-100">
      Biography - แนะนำตัวเอง
      Hello, Sawasdee ka. My name is Chatchanan Mankhetwit, nickname is Lek. Currently I am studying in program “Junior Software Developer” #7 of GenKX-Bootcamp. I have learned a lot of new various things of Technical skills, Behavioral skills & Mindsets and Career pathways preparation. This is an opportunity to expand my knowledges. As my goal is to become an elderly person who can take care of myself physically, mentally and financially without being a burden to others, I hope that my experience from this bootcamp, combined with my past working experiences, will give me the chance to get a job again. My slogan is "No one is too old to learn and be employed".
      </p>
    </>
  )
}

export default App
