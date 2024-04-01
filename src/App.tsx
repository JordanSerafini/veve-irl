import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MapContainer from "./components/map/MapContainer";
import AddPicModal from "./components/modals/addPicModal";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddPicModal/>} />
          <Route path="/map" element={<MapContainer/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
