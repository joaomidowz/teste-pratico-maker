import './App.css'
import { Link } from 'react-router-dom'


function App() {
  return (
    <>
      
      <div className='flex flex-col gap-4 p-4'>
        <Link to="/Exercise1"><p className=''>Exercicios 01</p></Link>
        
        <Link to="/Exercise2"><p className=''>Exercicios 02</p></Link>
        
        <Link to="/Exercise3"><p className=''>Exercicios 03</p></Link>
        
        <Link to="/Exercise4"><p className=''>Exercicios 04</p></Link>
        
        <Link to="/Exercise5"><p className=''>Exercicios 05</p></Link>
      </div>
      
    </>
      
  )
}

export default App
