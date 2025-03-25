
import Course from './Components'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        },
        
      ]
    },
    {
      name: 'C and Linux',
      id: 2,
      parts: [
        {
          name: 'Processes',
          exercises: 356,
          id: 1
        },
        {
          name: 'Headaches',
          exercises: 57,
          id: 2
        },
        
      ]
    }
  ]


  return (
    <div>
  <Course courses={courses} />

  


  </div>
)
}






//const Total = (props) => <p>Number of exercises {props.total}</p>

export default App

