import { useEffect } from "react";
import MapContainer from "../components/map/MapContainer";
import AddPicModal from "../components/modals/addPicModal";
import { usePoiStoreSelectors, usePoiStoreActions } from "../store/veveevent.store";

function Home() {
  const { selectPois } = usePoiStoreSelectors();
  const { fetchPois } = usePoiStoreActions(); 
  
  useEffect(() => {
    fetchPois();
  }, [fetchPois]); 

  const pois = selectPois();

  return (
    <div className="container">
      <div className="form">
        <AddPicModal />
      </div>
      <div className="map">
        <MapContainer pois={pois} />
      </div>
      <div className="poi-list">
        <h2>Points d'intérêt</h2>
        <ul>
          {pois.map((poi) => (
            <li key={poi.id}>
              <strong>{poi.name}</strong>: {poi.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
