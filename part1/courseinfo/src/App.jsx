const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (course)=>{
	return (
	    <p>{course.title}</p>
	);
  }

    const Content = (course)=>{
	console.log ("Im here");
	return(
	    
	    <p>
		{course.part} {course.exercises}
		
	    </p>
	  
	);

    }

    const Total = () => {

	return (
	    <p>
		Number of exercises = {exercises1+exercises2+exercises3}
	    </p>

	);

    }
    
   
    
    return (
    <div>
	<Header title={course}/>

	<Content part={part1} exercises={exercises1} />
	<Content part={part2} exercises={exercises2} />
	<Content part={part3} exercises={exercises3} />     
      
	<Total />
    </div>
  )
}

export default App
