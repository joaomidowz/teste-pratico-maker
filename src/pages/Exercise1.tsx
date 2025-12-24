import { useState } from 'react'
import '../App.css'

function Exercise1() {
  const [count, setCount] = useState(0)

  const LIMIT = 10

  function increment() {
    if (count < LIMIT) {
      setCount(count + 1)
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1)
    }
  }


  return (
    <>
      <h1>Exercicio 01</h1>
      <div className="card">
        <div className='flex items-center justify-center p-10'>
          <button className='bg-primary text-secundary rounded-l-lg' onClick={() => increment()}>+</button>
          <span className='text-white text-2xl bg-secundary px-4 py-1.5'>
            Contagem: {count}
          </span>
          <button className='bg-primary text-secundary rounded-r-lg' onClick={() => decrement()}>-</button>
        </div>
          {count === LIMIT &&(<p className='text-red-500 text-4xl'>Valor chegou ao limite!!</p>)}
      </div>
    </>
  )
}

export default Exercise1
