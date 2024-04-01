import MapContainer from "../components/map/MapContainer";
import AddPicModal from "../components/modals/addPicModal";

function Home() {
  return (
    <div className="container">
      <div className=" form">
        <AddPicModal />
      </div>
      <div className=" map">
        <MapContainer />
      </div>
    </div>
  );
}

export default Home;
