import { useState } from 'react'
import Person from './components/Person'
const error_Message= 'This person already exists.'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Artos Hellas' }
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
    //2.7 -> look for new name in array persons
    let name_inUse = persons.find ((ind)=> (ind.name === newName))
    //catch, if not undefined then there is a matching object; after alerting set newName back to 0
    if (name_inUse!= undefined) {
      alert (error_Message)
      setNewName('')
      return}
    console.log(name_inUse)
    console.log(persons[0].name)

    //after preventing default -> add newName to object persons
    //but first create a new object (do not pass newName directly)
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
          <Person ind={individual} key={individual.name} />
         ))
        }

      </ul>


      <h2>Numbers</h2>
    
    </div>
  )
}

export default App