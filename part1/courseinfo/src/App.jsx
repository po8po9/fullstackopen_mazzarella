//Part 1.3  - new definitions of variables, refactor so app still works
//Part 1.4 -> now objects are in an array -> solution is still clumsy
//Part 1.5 --> all is an object
const App = () => {
    const course = {
	name: 'Half Stack application development',
	parts: [
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
    }

    const Header = (course)=>{
	console.log(course);
	//object arrives inside an object, thus has to be accessed twice.
	return (
	    <p>{course.course.name}</p>
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
	//here the array is inside the passed object
	
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
	    <Header course={course}/>
	    <Content parts={course.parts} />
	    <Total parts={course.parts}/>
	 
	</div>
    )
}

export default App
