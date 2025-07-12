import { useState } from 'react'
import Persons from './components/Persons'
import Form_Add from './components/Form_Add'
/*****************CONSTANTS ****************/



const App = () => {


  const error_Message= ' already exists in the phonebook.'

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
  const showContacts = searchTrue ? persons.filter(ind => ind.name.toLowerCase().includes(newSearch.toLocaleLowerCase())) : persons 



  /**********HANDLERS****************************** */
    

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
  const addNewName = (ev) => {
    ev.preventDefault()
    //first check if exists

    let comparedName = newName.trim() //avoid spaces at EOSentance
    let name_inUse = persons.find (
      (ind)=> (    
        ind.name.trim().toLowerCase() === newName.trim().toLowerCase()
      )
    )   
    if (name_inUse!= undefined) {
      alert (newName + error_Message)
      setNewName('')
      setNewNumber('')
      return
    }


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
  /************************************************************ */


  
  return (
    <div>
      <h2>Phonebook</h2>
   
        <Search query={newSearch} handler= {handleChange}/>
      

      <h2>New Contact</h2>

      <Form_Add handler={handleChange} adder={addNewName} name={newName} number={newNumber}/>
      
      
      <h2>Numbers</h2>

      <Persons list={showContacts}/>
     
    </div>
  )
}





const Search =({query, handler})=>{

   return(<div>search: <input id='search_input' value={query} onChange={handler}/></div>)
}





export default App