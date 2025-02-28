const App = () => {

    //Part 1.3  - new definitions of variables, refactor so app still works
    
 const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
    

  const Header = (course)=>{
	return (
	    <p>{course.title}</p>
	);
  }

    const Part = (part) => {
	console.log (part);	
	    return(
	    <p>
		{part.name} {part.exer}
	    </p>
		);
	}

  const Content = ()=>{
	
	
	return(
	<>   
	    <Part  name={part1.name} exer={part1.exercises}/>
	    <Part  name={part2.name} exer={part2.exercises}/>
	    <Part  name={part3.name} exer={part3.exercises}/>
	</> 
	);

	};

    const Total = () => {
	//here the sum is not pretty, but it works
	return (
	    <p>
		Number of exercises = {part1.exercises+part2.exercises+part3.exercises}
	    </p>

	)

    }
    
   
    
    return (
    <div>
	<Header title={course}/>

	<Content/>
	<Total />
	
    </div>
  )
}

export default App
