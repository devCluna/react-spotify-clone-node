import {useEffect, useState} from 'react'
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import axios from 'axios'

const codeSearch = new URLSearchParams(window.location.search).get('code')
axios.defaults.baseURL= process.env.REACT_APP_SERVER_URL

function App() {
  useEffect(()=>{
     
  }, [])
  const [code, setCode] = useState()
  
useEffect(()=>{
  setCode(codeSearch)
},[codeSearch])

  return(
    <div className='App'> 
    
    {code ? <Dashboard code={code} setCode={setCode}/> : <Login/>}
    </div>
  )
}

export default App;
