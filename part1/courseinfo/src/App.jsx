const App = () => {

    //Part 1.3  - new definitions of variables, refactor so app still works
    //Part 1.4 -> now objects are in an array -> solution is still clumsy
const course = 'Half Stack application development'

const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]    

  const Header = (course)=>{
	return (
	    <p>{course.course}</p>
	);
  }

   const Part = (item) => {
       console.log(item);
	    return(
	    <p>
		{item.item.name} {item.item.exercises}
	    </p>
		);
	}

  const Content = (parts)=>{
	
      
	return(
	<>   
	    <Part item={parts.parts[0]}/>
	    <Part item={parts.parts[1]}/>
	    <Part item={parts.parts[2]}/>
	</> 
	);

	};

   const Total = (parts) => {
       //
       let a=parts.parts[0].exercises;
       let b=parts.parts[1].exercises;
       let c=parts.parts[2].exercises;
	return (
	    <p>
		Number of exercises = {a+b+c}
	    </p>
	    )

    }
    
   
    
    return (
	<div>
	    <Header course={course} />	    
	    <Content parts={parts} />
	    <Total parts={parts}/>
	</div>
  )
}

export default App
