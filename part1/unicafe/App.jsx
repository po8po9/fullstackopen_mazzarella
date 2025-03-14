import { useState } from 'react'

const STATES = 3
const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [average, setAverage] = useState (0)
    const [total, setTotal] = useState (0)    
    
    const Title = ({text}) =>  <h1> {text} </h1>
    const Display = ({value, text}) =><span> {text} {value}  </span> //general display / renderer 

    const Button = (props) =>	 
	      <button onClick={props.onClick}>
		    {props.text}
	      </button>
        
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
    const Statistics = () =>{	
	if (total > 0) {
	    return(		
		<div>
		    <Display value = {neutral} text="neutral"/><br/>
		    <Display value = {good} text="good"/><br/>
		    <Display value = {bad} text="neutral"/><br/>
		    <Display value = {total}  text = "total score: " /><br/>
		    <Average /><br/>
		    <Positive />
		</div>)
	}
	return(<div> no feedback given </div>)
    }
	
    const Average = () => <span>average: {total/STATES} </span>

    const Positive = () => {
	if ( good > 0){
	    return (<span>positive feedback: {(good*100)/total}%</span>)
	}
	return <span> positive feedback: none yet </span>
    }  
    return (
	<div >	   
	    <Title text="give feedback"/>
	    <Button onClick = {setFeedback('G')} text="good"/>
	    <Button onClick = {setFeedback('N')} text="neutral"/>	     	   
	    <Button onClick = {setFeedback('B')} text="bad"/>
	    <Title text="statistics"/>	   
	    <Statistics />
	  </div>)
   
}
export default App
