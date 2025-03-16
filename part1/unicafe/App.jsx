import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState (0)
  

   const setFeedback = (state) => () => { //could be optimized?
	switch (state){
	case 'N':	 
	    setNeutral (neutral + 1);
	    break;
	case 'G':
	    setGood (good + 1)	   
	    break;
	case 'B':
	    setBad (bad + 1)	  
	    break;
	}       
       setTotal (total + 1)
       
   }    	
  return (
    <div>
	<h1>give feedback</h1>
	<Button onClick = {setFeedback('G')} text="good"/>
	<Button onClick = {setFeedback('N')} text="neutral"/>	     	   
	<Button onClick = {setFeedback('B')} text="bad"/>
	<Statistics props = {{good: good, bad : bad, neutral : neutral, sum :total}} />

    </div>
  )
}
const Statistics = ({props}) => {

	if (props.sum === 0 ){
		return (<div> no feedback yet </div>)
	}
	
    console.log (props.sum)
    /*console.log (props.bad * (-1))
    console.log (props.neutral)
    console.log (props.total)*/
    
	const averageFeed = () => {
		if (props.sum >0 ){
			return ( (props.good + (props.bad * (-1)) )/props.sum)
		}
		return 0
    }
    
 	const positiveFeed = () => {

		if (props.good === 0){
	    		return 0
		}
		return (props.good*100/props.sum + '%')
    }

    return (
	<div>
		<h1>statistics</h1>
	<table>
		<tbody>
	<StatisticLine value = {props.good}  text="good"/>
	<StatisticLine value = {props.neutral}  text="neutral"/>
	<StatisticLine value = {props.bad}  text="bad"/>
	<StatisticLine value = {props.sum}  text="all"/>
	
	<StatisticLine value = {positiveFeed ()}  text="positive feedback"/>
	<StatisticLine value = {averageFeed ()}  text="average feedback"/>
	</tbody>
	</table>
	</div>
    )
	
}
const StatisticLine = ({text, value}) => {
    
	return (<tr>
		   
				<td>{text} </td>		
			
				<td>{value} </td>
			
				</tr>
    )}
 const Button = (props) =>	 
	      <button onClick={props.onClick}>
		    {props.text}
	      </button>
export default App
