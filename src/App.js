import "./App.css";

const Person = () => {
  return (
    <>
      <h1>Name: </h1>
      <h2>Last Name: </h2>
      <h2>Age: </h2>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Person />
    </div>
  );
};

export default App;
