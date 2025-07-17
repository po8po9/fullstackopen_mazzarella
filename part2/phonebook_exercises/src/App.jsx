import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Form_Add from './components/Form_Add'
import phoneService from './services/phonebook_ser'
/*****************CONSTANTS ****************/
const App = () => {


  const error_Message= ' already exists in the phonebook.'

  const [persons, setPersons] = useState([])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [searchTrue, toggleSearch] = useState(false)
  const showContacts = searchTrue ? persons.filter(ind => ind.name.toLowerCase().includes(newSearch.toLocaleLowerCase())) : persons 

//*************************GET DATA FROM JSON SERVER***************/

//step 1 -> services in new file

  useEffect( () => {
    //  console.log("this is effect")
      phoneService.getPeople().then (
       response => setPersons(response)
      )      
      }, [] )

  /**********HANDLERS****************************** */
    

  const handleChange = (e)=> {

  switch(e.target.id){
    case 'name_inpufit':     
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
    if (name_inUse!= undefined) { //found
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
  
    setPersons(persons.concat(newPerson))

    //add to DB

    

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