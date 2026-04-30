import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Defi101 from "./pages/Defi101";
import RiskPage from "./pages/RiskPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/defi101" element={<Defi101 />} />
        <Route path="/risk101" element={<RiskPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
