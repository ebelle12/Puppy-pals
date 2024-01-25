import './App.css'
import { puppyList } from './data.js'
import { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  

  return (
    <div>
      {
        puppies.map((puppy) => {
          return <p onClick={()=>{}} key={puppy.id}>{puppy.name}</p>
        })
      }


    </div>
  )
}

export default App
