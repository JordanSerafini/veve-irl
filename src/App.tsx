// App component
import MapContainer from "./components/map/MapContainer";
import AddPicModal from "./components/modals/addPicModal";

function App() {
  


  return (
    <div className="App">
      <AddPicModal />
      <MapContainer />
    </div>
  );
}

export default App;