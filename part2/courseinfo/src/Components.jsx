const Course = ({course}) => {
  //console.log (course.parts)
          return (
          <div>
            <Header title = {course.name} />
            <Content parts = {course.parts} />
            <Total course_Parts={course.parts}/>
          </div>
  )
}
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

const Part = ({course_part}) =>{
 return( 
    <li>
        {course_part.name} {course_part.exercises}
    </li>)

}
const Total = ({course_Parts}) => {
  //let totalExercises = course_Parts.map (part => part.exercises)
  console.log (course_Parts)
  let totalEx = course_Parts.reduce((acumm, curr) => acumm + curr.exercises,0)
  console.log(totalEx)
    /*  totalExercises.forEach(element => {
        sum += element*/

return <div>Total exercises {totalEx}</div>

}
export default Course