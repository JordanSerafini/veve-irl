// App component
import MapContainer from "./components/map/MapContainer";
import UploadForm from "./components/map/UploadImg";
import AddPicModal from "./components/modals/addPicModal";

function App() {
  


  return (
    <div className="App">
      <AddPicModal />
      <UploadForm />
      <MapContainer />
    </div>
  );
}

export default App;