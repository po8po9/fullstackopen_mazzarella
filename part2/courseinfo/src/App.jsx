
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
const Header = ({title}) =>{

  return (<h1>{title}</h1>) 

}
//now parts is an array , can use map to display?
const Course = ({course}) => {
//console.log (course.parts)

      return (
        <div>
          <Header title = {course.name} />
          <Content parts = {course.parts} />
        </div>
)

}
  

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  const course2 = {
    id: 2,
    name: 'Full Stack application development',
    parts: [
      {
        name: 'inner of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to rock data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a world',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
  <Course course={course} />
  <Course course={course2} />
  </div>
)
}




const Total = (props) => <p>Number of exercises {props.total}</p>

export default App

