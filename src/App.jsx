import { Carrousel } from "./components/Carrousel";
import { Header } from "./components/Header";
import { Info } from "./components/Info";

function App() {
  return (
    <>
      <div className="App">
        <div
          className="d-flex flex-column justify-content-center w-100 h-100"
          id="background"
        >
          <Header />

          <Carrousel />
          <Info />
        </div>
      </div>
    </>
  );
}

export default App;
