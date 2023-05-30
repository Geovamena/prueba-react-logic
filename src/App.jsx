import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Echo from './react/Echo'
import List from './react/List'
import Counter from './react/Counter'
import Stopwatch from './react/Stopwatch'

function App() {

  return (
    <>
      <h2 className='title'>Cronómetro</h2>
      <div className='card'>
        <Stopwatch />
      </div>
    </>

  )
}

export default App
