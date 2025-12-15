const Header = (props) =>{
  console.log(props)
  return (
  <div>
    <h1> Course name is {props.course}</h1>
    </div>
  )
}
const Part=(props) =>{
  console.log(props)
    return (
    <div>
  <p>Content is "{props.part}" exercise is "{props.exe}"</p>
      </div>
  )
}
const Content = (props) =>{
  console.log(props)
  return(
  <div>
    <Part part={props.part1} exe={props.ex1}/>
    <Part part={props.part2} exe={props.ex2}/>
    <Part part={props.part3} exe={props.ex3}/>
       </div>
  )
}

const Total =(props)=>{
  console.log(props)
  return(
  <div>
  <p>Number of exercises is {props.ex1 + props.ex2 + props.ex3}</p>
    </div>
  )
}

const App = () => {
    const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 ='Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 =14

return (
<div>
      <Header course={course}/>
     <Content part1={part1} ex1={exercises1}
part2={part2} ex2={exercises2}
        part3={part3} ex3={exercises3}
      />
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
    </div>
)
}

export default App
