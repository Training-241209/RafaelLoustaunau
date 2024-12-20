import { useState } from 'react'
import reactLogo from './assets/react.svg'
import LoginForm from './components/LoginForm';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
     <LoginForm />
     </div>
    </>
  )
}

export default App
