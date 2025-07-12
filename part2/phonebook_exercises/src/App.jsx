import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  
  //event handler for form
  const handleNewName = (e) =>{
    e.preventDefault()
    //console.log ('button clicked', e.target.value)
    setNewName (e.target.value)
  } 

  const addNewName = (ev) => {
    ev.preventDefault()
    //after preventing default -> add newName to object persons
    const newPerson={
      name:newName
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    //console.log (persons)
  } 

  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <ul>
        {persons.map((individual)=>(
          <Person ind={individual} key={crypto.randomUUID()} />
         ))
        }

      </ul>


      <h2>Numbers</h2>
    
    </div>
  )
}

export default App