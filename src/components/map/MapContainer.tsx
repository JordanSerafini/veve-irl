import { useState } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import  VeveEvent  from "../../types/veve.type";
//import { usePoiStoreActions } from '../../store/veveevent.store';


interface MapContainerProps {
  pois: VeveEvent[];
  isShowPics: boolean;
  onShowPicsChange: (newValue: boolean) => void;
}


const MapContainer = ({ pois, isShowPics, onShowPicsChange }: MapContainerProps) => {

 // const poiStoreActions = usePoiStoreActions();


  const defaultCenter = {
    lat: 45.900002,
    lng: 6.11667,
  };

  const [selectedPoi, setSelectedPoi] = useState<VeveEvent | null>(null);

  const handleMarkerClick = (poi: VeveEvent) => {
    if (selectedPoi && selectedPoi.id === poi.id) {
      setSelectedPoi(null);
    } else {
      setSelectedPoi(poi);
      //poiStoreActions.addPoi(poi);
    }
  };
  

  const handleCloseInfoWindow = () => {
    setSelectedPoi(null);
  };

  const showPics = () => {
    onShowPicsChange(!isShowPics);
  };

  return (
    <div className="w-full h-full">
      <GoogleMap
        mapContainerStyle={{ height: "100%", width: "100%" }}
        zoom={10}
        center={defaultCenter}
      >
        {pois.map((poi) => (
          <Marker
            key={poi.id}
            position={{ lat: poi.lat, lng: poi.lng }}
            title={poi.name}
            onClick={() => handleMarkerClick(poi)}
          />
        ))}
        {selectedPoi && (
          <InfoWindow
            position={{ lat: selectedPoi.lat, lng: selectedPoi.lng }}
            onCloseClick={handleCloseInfoWindow}
          >
              <button onClick={showPics}>Voir photo</button>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default MapContainer;
