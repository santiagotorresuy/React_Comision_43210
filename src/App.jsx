import NavBar from "./components/NavBar/NavBar.jsx";
import Greeting from "./components/ItemListContainer/ItemListContainer.jsx";

function App() {
  const main = {
    textAlign: "center",
  }

  return(
    <div>
      <header>
        <NavBar />
      </header>
      <main style={main}>
        <Greeting greeting="Hola Coder"></Greeting>
      </main>
    </div>
  )
}

export default App;
