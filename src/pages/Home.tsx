import { useEffect } from "react";
import MapContainer from "../components/map/MapContainer";
import AddPicModal from "../components/modals/addPicModal";
import { usePoiStoreSelectors, usePoiStoreActions } from "../store/veveevent.store";
import VeveEvent from "../types/veve.type";

function Home() {
  const { selectPois } = usePoiStoreSelectors();
  const { fetchPois } = usePoiStoreActions(); 
  
  useEffect(() => {
    fetchPois();
  }, [fetchPois]); 

  const pois = selectPois();

  return (
    <div className="w-10/10 h-10/10 gap-8 flex flex-col items-center justify-center bg-mainBG2">
      <div className="h-3/10 w-8/10 border-2 border-secondary bg-white">
        <AddPicModal />
      </div>
      <div className="w-9.5/10 h-5/10 border-2 border-secondary rounded">
        <MapContainer pois={pois} />
      </div>
      <div className="">
        <h2>Points d'intérêt</h2>
        <ul>
          {pois.map((poi: VeveEvent) => (
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
