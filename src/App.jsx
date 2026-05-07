import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Defi101 from "./pages/Defi101";
import RiskPage from "./pages/RiskPage";
import WalletPage from "./pages/WalletPage";
import ChainPage from "./pages/ChainPage";
import ScamPage from "./pages/ScamPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/defi101" element={<Defi101 />} />
        <Route path="/risk101" element={<RiskPage />} />
        <Route path="/wallet101" element={<WalletPage />} />
        <Route path="/chain101" element={<ChainPage />} />
        <Route path="/scamguard" element={<ScamPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
