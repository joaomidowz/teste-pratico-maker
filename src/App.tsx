import './App.css'
import { Link } from 'react-router-dom'


function App() {
  return (
    <>
      
      <div className='grid grid-cols-2 gap-4 p-4'>

        <Link to="/Exercise1"><p className='p-10 border rounded-2xl hover:border-secundary transition duration-250'>Exercicios 01</p></Link>
        
        <Link to="/Exercise2"><p className='p-10 border rounded-2xl hover:border-secundary transition duration-250'>Exercicios 02</p></Link>
        
        <Link to="/Exercise3"><p className='p-10 border rounded-2xl hover:border-secundary transition duration-250'>Exercicios 03</p></Link>
        
        <Link to="/Exercise4"><p className='p-10 border rounded-2xl hover:border-secundary transition duration-250'>Exercicios 04</p></Link>
        
        <Link to="/Exercise5"><p className='p-10 border rounded-2xl hover:border-secundary transition duration-250'>Exercicios 05</p></Link>
      </div>
      
    </>
      
  )
}

export default App
