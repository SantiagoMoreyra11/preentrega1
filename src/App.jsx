import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import Items from "./Components/Items/Items";


function App() {
  return (
    <>
      <div>
        <NavBar />
        <Items greeting="Bienvenido a mi pagina hecha con react " />
      </div>
    </>
  );
}

export default App;
