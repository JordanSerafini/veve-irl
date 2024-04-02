import { useState } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import  VeveEvent  from "../../types/veve.type";

interface MapContainerProps {
  pois: VeveEvent[];
}

const MapContainer = ({ pois }: MapContainerProps) => {
  const defaultCenter = {
    lat: 45.900002,
    lng: 6.11667,
  };

  const [selectedPoi, setSelectedPoi] = useState<VeveEvent | null>(null);

  const handleMarkerClick = (poi: VeveEvent) => {
    setSelectedPoi(poi);
  };

  const handleCloseInfoWindow = () => {
    setSelectedPoi(null);
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
            <div>
              <p>{selectedPoi.url}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default MapContainer;
