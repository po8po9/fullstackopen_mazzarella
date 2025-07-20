import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Form_Add from './components/Form_Add'
import Form_Del from './components/Form_Del'
import Form_Search from './components/Form_Search'
import phoneService from './services/phonebook_ser'
/*****************CONSTANTS ****************/
const App = () => {


  const error_Message= ' already exists in the phonebook.'

  const [persons, setPersons] = useState([])
  
  const [newName, setNewName] = useState('')
  const [delName, setDelName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [searchTrue, toggleSearch] = useState(false)
  const showContacts = searchTrue ? persons.filter(ind => ind.name.toLowerCase().includes(newSearch.toLocaleLowerCase())) : persons 

//*************************GET DATA FROM JSON SERVER***************/


  useEffect( () => {
      phoneService.getPeople().then (response => 
        setPersons(response)
      )      
      }, [] )

  /**********HANDLERS****************************** */
    

  const handleChange = (e)=> {

  let changed= e.target.value

  switch(e.target.id){
    case 'name_input':     
      setNewName (changed)
      break;
    case 'number_input':
      setNewNumber (changed)
      break;
    case 'search_input':
      setNewSearch (changed)
      toggleSearch(true)
    case 'del_input':
      setDelName (changed)
      break;
   
    
  }
}
  const addNewName = (ev) => {
    
    ev.preventDefault()
    //first check if exists

    let name_inUse = persons.find (
      (ind)=> ind.name.trim().toLowerCase() === newName.trim().toLowerCase()// trim avoids spaces at EOSentance
    )   

    if (name_inUse!= undefined) { //found
      if(confirm (`${newName}is already in the phonebook, update phone number? ` )){

        //console.log ("write a function to actually update :)") //here ->
        //console.log ("updatedPerson")
       
        
        const updatedPerson={
          id:name_inUse.id,
          name:name_inUse.name,
          number:newNumber
        }

        //console.log (updatedPerson)
        phoneService.updatePerson(updatedPerson)
        .then ((returnedUpdated) =>{
          let indexObj = persons.indexOf(persons.find(person => person.id === updatedPerson.id)) //where + lookupID +define position
          
          console.log (indexObj)
          console.log (persons)

          setPersons(persons.toSpliced (indexObj, 1, updatedPerson))
        }

        )

        
      }

      setNewName('')
      setNewNumber('')
      return 
    }


    const newPerson={
      name:newName,
      number:newNumber
    }
    /**Add */
  
    phoneService.addPerson(newPerson)
      .then (returnedPer => {
        setPersons(persons.concat(returnedPer))
        setNewName('')
        setNewNumber('')
      }
      )

     

    //add to DB



    /**Clear */
    setNewName('')
    setNewNumber('')    
  } 


  const delPerson = (ev) => {
    ev.preventDefault()
    
    let name_toPop = persons.find (
      (ind)=> (    
        ind.name.trim().toLowerCase() === delName.trim().toLowerCase()
      )
    )
    console.log (name_toPop)   
    if (name_toPop != undefined && confirm (`Delete ${name_toPop.name} from phonebook?`)){
      
      //only delete if it exists and user confirms.

      phoneService.popPerson(name_toPop.id)
      .then( ()=>{
        setPersons(persons.filter((person) => person.id !== name_toPop.id))
        setDelName('')
    })

      //console.log ('exists!')
      
      
      

      // console.log (persons)
    }else{
      alert (`${delName} does not exist`)
      setDelName('')
    }
  
  
  }
  /************************************************************ */


  
  return (
    <div>
      <h2>Phonebook</h2>
   
      <Form_Search query={newSearch} handler= {handleChange}/>
      

      <h2>New Contact</h2>

      <Form_Add handler={handleChange} adder={addNewName} name={newName} number={newNumber}/>
      <hr></hr>
      
      <h2>Delete Contact</h2>
     
      <Form_Del handler={handleChange} popper={delPerson} name={delName}/>
      
      <h2>Numbers</h2>

      <Persons list={showContacts}/>

 
     
    </div>
  )
}





export default App