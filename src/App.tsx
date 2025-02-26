import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonList from "./components/pages/PokemonList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;