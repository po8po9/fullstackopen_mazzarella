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
	return (
		<div>
			<Header course={course}/>
			<Content parts={course.parts} />
			<Total parts={course.parts}/>
		 
		</div>
		)
	}
	
const Header = ({course})=>{return (<p>{course.name}</p>);}
 

const Part = ({item}) =>{return(<p>   {item.name} ::>>  {item.exercises} </p>);  }

const Content = ({parts})=>{	
	return(
	    <>   
		<Part item={parts[0]}/>
		<Part item={parts[1]}/>
		<Part item={parts[2]}/>
	    </> 
	)};

const Total = ({parts}) => {
	//
	let a=parts[0].exercises;
	let b=parts[1].exercises;
	let c=parts[2].exercises;
	return (
	    <p>
		Number of exercises = {a+b+c}
	    </p>
	)} 
    
 
export default App
