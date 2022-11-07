import './App.css';

const Person = (props) => {
  return (
  <>
  <h1>Name: {props.name}</h1>
  <h2>Last Name: {props.lastName}</h2>
  <h2>Age: {props.age}</h2>
  </>)
}


const App = () => {


  return (
    <div className="App">
      <Person 
        name={'John'} 
        lastName={'Doe'} 
        age={'30'}/>
      <Person name={'Bob'} lastName={'Harding'} age={'99'}/>
      <Person name={'Ryan'} lastName={'Rich'} age={'22'}/>
      <Person name={'Pat'} lastName={'Fillings'} age={'42'}/>
      <Person name={'Osker'} lastName={'Miner'} age={'30'}/>
    </div>
  );
}

export default App;
