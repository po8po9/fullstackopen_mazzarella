import Person from "./Person"
const Persons =({list})=>{
    console.log (list)
    return(
      <ul>
        {        
        list.map((individual)=>(
          <Person name={individual.name} key={individual.name} number={individual.number} />
         ))
        }
      </ul> )


}


export default Persons
