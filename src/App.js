
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hotel from "./pages/Hotel/Hotel";
import List from "./pages/List/List";

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/hotels" element={<List/>} />
        <Route  path="/hotel" element={<Hotel/>} />
      </Routes>
    </Router>
  );
}

export default App;
