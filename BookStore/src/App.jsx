import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {


    useEffect(()=>{
      axios.get('https://reqres.in/api/users?page=2')
      .then(res=>console.log(res))
      .catch(err=>console.log(err));
    },[])
  return (
    <div>
              <h1>Canı Götten</h1>
    </div>
  )
}

export default App
