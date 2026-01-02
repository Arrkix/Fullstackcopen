import {useState} from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) =><button onClick={onClick}>{text} </button>
const History = (props) =>{
  if(props.allClicks.length === 0){
    return (
    <div>App is used by pressing buttons</div>
    )
  }
  return(
  <div>Button press history: {props.allClicks.join(' ')}</div>
  )
}


const StatisticLine = (props) => {
  return (<div>
  {props.text} : {props.value}
  </div>
  )
}

const Statistics = (props) => {
  const total = props.good + props.bad + props.neutral
  const avg = total === 0 ? 0 : (props.good * 1 + props.neutral * 0 + props.bad * (-1))/total 
  const positive = total === 0 ? 0 : (props.good/total) * 100 
  
  if(props.good === 0 && props.bad === 0 && props.neutral === 0){
    return (
    <div>No feedback given</div>
    )
  }
  console.log(props)
    return (
    <div>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="total" value={total} />
      <StatisticLine text="average" value={avg} />
      <StatisticLine text="positive" value={positive + '%'} />
    </div>
    
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleLeftClick = () => {
    const updatedLeft = good + 1
    setGood(updatedLeft)
  }
const handleNeutral = () => {
    const updatedNeu = neutral + 1
    setNeutral(updatedNeu)
  }

  const handleRightClick = () => {
    const updatedRight = bad + 1 
    setBad(updatedRight)
  }

  return (
    <div>
      <h1><b>Give Feedback</b></h1>
      <Button onClick={handleLeftClick} text='Good'/>
      <Button onClick={handleNeutral} text='Neutral'/>
      <Button onClick={handleRightClick} text='Bad'/>
  <h2><b>Statistics</b></h2>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}
export default App
