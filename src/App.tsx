import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonList from "./components/pages/PokemonList"; // Halaman daftar Pokémon
import PokemonDetailPage from "./components/pages/PokemonDetailPage"; // Halaman detail Pokémon

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;