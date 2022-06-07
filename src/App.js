import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import NavBar from "./components/Chart/NavBar/NavBar";
import EurUsd from "./pages/EurUsd";
import UsdGbp from "./pages/UsdGbp";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/eur_usd" element={<EurUsd />} />
        <Route path="/usd_gbp" element={<UsdGbp />} />

        <Route path="*" element={<Navigate to="/eur_usd" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
