import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  //const votes_arr = new Uint8Array(8); 
  const [selected, setSelected] = useState(0)
  const [votes_poll, setPoll] = useState(new Uint8Array(8))
 
  
const getRandom = (max) => () =>  {
	 // from mozilla docs "[...]always rounds down and returns the largest integer less than or equal to a given number."
	setSelected(Math.floor(Math.random() * max))
  }

const vote = (selected) => () => {

	const new_vote = [...votes_poll]
	new_vote [selected] += 1
	setPoll(new_vote)

	
}
const getHigh = () =>  {
	
		console.log(Math.max(...votes_poll))
		console.log(Math.max(...votes_poll))
		return votes_poll.indexOf(Math.max(...votes_poll))
}

  return (
    <div>
      {anecdotes[selected]}
	  
	  <br/>
	  <Button onClick={getRandom(anecdotes.length)} text="next anecdote"/>
	  <Button onClick={vote (selected)} text="vote"/>
	  <DisplayVotes poll = {votes_poll} current = {selected} />
	  <DisplayHigh poll = {votes_poll} current = {getHigh()} anec = {anecdotes[getHigh ()]} />
    </div>
  )
}
const Button = (props) =>	 
	<button onClick={props.onClick}>
	  {props.text}
	</button>

const DisplayVotes = ({poll, current})=>
	<p><br/>This ancedote has  {poll[current]} votes </p>

const DisplayHigh =  ({poll, current, anec})=>{
	if (poll[current] > 0 ){
		return (
			<div>		
			<h2><br/>This ancedote has the highest votes with {poll[current]} vts. </h2>
			<p>{anec}</p>
			</div>
			)	
	}
	return (<p>No winner yet</p>)
	
}
export default App