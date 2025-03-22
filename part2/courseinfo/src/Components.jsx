
const usedIDs = []
const Header = ({title}) =>{
   
    return (<h1>{title}</h1>) 
  
  }

const Content = ({parts}) =>{

  return(
 <ul>
  {parts.map (x => 
  <Part key={x.id} course_part={x}/>)}
  </ul>
)

}
//Part called by content
const Part = ({course_part}) =>{
 return( 
    <li>
        {course_part.name} {course_part.exercises}
    </li>)

}
const Total = ({course_Parts}) => {
  //let totalExercises = course_Parts.map (part => part.exercises)
  // console.log (course_Parts)
  let totalEx = course_Parts.reduce((acumm, curr) => acumm + curr.exercises,0) //only sums .exercies
  // console.log(totalEx)
    /*  totalExercises.forEach(element => {
        sum += element*/

return <div>Total exercises {totalEx}</div>

}

const generateID = (originalID) => {
  
  let newID = Math.floor (Math.random() * 100 * originalID) //otherwise IDs are repeated in map function
  usedIDs.push(newID)
  if (usedIDs.find (id => id === originalID)){  
    console.log ("used ID, recalculating")
    generateID (Math.floor(Math.random()*100))
}
console.log (newID)  
console.log (usedIDs)
  
  return newID
}

const Course = ({courses}) => {
  

 
  return (
    
      courses.map ( course=> {
             
        // console.log (course.id)
        return (
              <div key = {generateID(course.id)}>

              <Header key = {generateID(course.id)} title = {course.name} />
              <Content key = {generateID(course.id)} parts = {course.parts} />
              <Total key = {generateID(course.id)} course_Parts={course.parts}/>
        
              </div>) 
              }
            )
                       
  
)
  }

        
          

export default Course