import { useState } from 'react'
import Person from './components/Person'
/**CONSTANTS */

const error_Message= ' already exists in the phonebook.'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [searchTrue, toggleSearch] = useState(false)

// One method

  const handleChange = (e)=> {

  switch(e.target.id){
    case 'name_input':     
      setNewName (e.target.value)
      break;
    case 'number_input':
      setNewNumber (e.target.value)
      break;
    case 'search_input':
      setNewSearch (e.target.value)
      toggleSearch(true)

      
    
  }
}

//callsearch

/**FORM INPUT*/


  const addNewName = (ev) => {
    ev.preventDefault()
    //2.7 -> look for new name in array persons
    let comparedName = newName.trim() //otherwise white spaces at the end allow duplicates. Still dealing with the inner spaces, since -> john doe + johndoe can coexist
    let name_inUse = persons.find (
      (ind)=> (    
        ind.name.toLowerCase() === comparedName.toLowerCase()
      )
    )   
    //catch, if not undefined then there is a matching object; after alerting set newName back to 0
    if (name_inUse!= undefined) {
      alert (newName + error_Message)
      setNewName('')
      setNewNumber('')
      return
    }
    //after preventing default -> add newName to object persons
    //but first create a new object (do not pass newName directly)

    const newPerson={
      name:newName,
      number:newNumber
    }
    /**Add */
    console.log (newPerson)
    setPersons(persons.concat(newPerson))
    /**Clear */
    setNewName('')
    setNewNumber('')
    
  } 
  console.log (searchTrue)
  const showContacts = searchTrue ? persons.filter(ind => ind.name.includes(newSearch)) : persons 
  console.log (showContacts)
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>search: <input id='search_input' value={newSearch} onChange={handleChange}/></div>

      <h2>New Contact</h2>
      <form onSubmit={addNewName}>
        <div>
          <div>name: <input id='name_input' value={newName} onChange={handleChange}/></div>
          <div>number: <input id='number_input'value={newNumber} onChange={handleChange}/></div>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>   
      <h2>Numbers</h2>
        <ul>
        {
                
        showContacts.map((individual)=>(
          <Person name={individual.name} key={individual.name} number={individual.number} />
         ))
        }
      </ul>    
    </div>
  )
}
export default App