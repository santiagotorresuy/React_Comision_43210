import NavBar from "./components/NavBar/NavBar.jsx";
import Greeting from "./components/ItemListContainer/ItemListContainer.jsx";

function App() {
  return(
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Greeting greeting="Hola Coder"></Greeting>
      </main>
    </div>
  )
}

export default App;
