import { useState } from 'react'
import Person from './components/Person'
/**CONSTANTS */

const error_Message= ' already exists in the phonebook.'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Artos Hellas' ,
      number: '+396558582'

    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  

/**CHANGE HANDLERS 

  //event handler for form
  const handleNewName = (e) =>{
    e.preventDefault()
    console.log(e)
    //console.log ('button clicked', e.target.value)
    setNewName (e.target.value)
  } 
  //simple solution, need to sharpen into one method

  const handleNewNumber = (e) =>{
    
    console.log ('number changed', e.target.value)
     console.log ('number e object' , e.target)
    setNewNumber (e.target.value)
  } 
    */

// One method

  const handleChange = (e)=> {

  switch(e.target.id){
    case 'name_input':     
      setNewName (e.target.value)
      break;
    case 'number_input':
      setNewNumber (e.target.value)
      break;
    
  }
}

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
    //console.log(name_inUse)
    //console.log(persons[0].name)

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

  
  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map((individual)=>(
          <Person name={individual.name} key={individual.name} number={individual.number} />
         ))
        }
      </ul>    
    </div>
  )
}
export default App