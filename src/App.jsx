import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainForms from "./components/MainForms";
import Vaccines from "./components/vaccines/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainForms />} />
        <Route path="/vaccines" element={<Vaccines />} />
      </Routes>
    </Router>
  );
}

export default App;
