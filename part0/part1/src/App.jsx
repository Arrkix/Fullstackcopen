const Hello=(props)=>{
  console.log(props)
  return ( <div>
    <p>Hello {props.name}</p>
    </div>)
}

const App = () => {
  let friends = [ "peter", "pan"];
   return (
    <>
      <h1>Greetings</h1>
      <p>{friends}</p>
    </>
  )
}

export default App
