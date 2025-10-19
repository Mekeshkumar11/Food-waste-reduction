import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DonorDashboard from "./pages/DonarDashboard";
import ConsumerDashboard from "./pages/ConsumerDashboard";
import FoodList from "./pages/FoodList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donor" element={<DonorDashboard />} />
        <Route path="/consumer" element={<ConsumerDashboard />} />
        <Route path="/food" element={<FoodList />} />
      </Routes>
    </Router>
  );
}

export default App;
