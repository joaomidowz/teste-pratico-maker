import { useState } from 'react'
import '../App.css'

function Exercise2() {
  const [count, setCount] = useState(0)
  const [maxReached, setMaxReached] = useState(false)

  const countLImit = 10
  if (count > countLImit) {
    setCount(countLImit)
    setMaxReached(true)
  }

  if (maxReached) {
    alert("Limite máximo atingido!")
    setMaxReached(false)
  }

  return (
    <>
      <h1>Exercicio 01</h1>
      <div className="card">
        <div className='flex items-center justify-center'>
          <button className='bg-primary text-secundary rounded-l-lg' onClick={() => setCount((count) => count + 1)}>+</button>
          <a className='text-white text-2xl bg-secundary px-4 py-1.5'>
            Contagem: {count}
          </a>
          <button className='bg-primary text-secundary rounded-r-lg' onClick={() => setCount((count) => count - 1)}>-</button>
        </div>
      </div>
    </>
  )
}

export default Exercise2
