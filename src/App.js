import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./App.css";
import NavBar from "./components/Chart/NavBar/NavBar";
import InfoPage from "./pages/InfoPage";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Currency Exchange Rate</h1>
      </header>
      <Router>
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/pairs/:pair" element={<InfoPage />} />
            <Route
              path="*"
              element={<Navigate to="/pairs/eur_usd" replace />}
            />
          </Routes>
        </div>
      </Router>
      <footer>Made by Igal Bogopolsky for Chainwire</footer>
    </div>
  );
}

export default App;
