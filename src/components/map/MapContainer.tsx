import { GoogleMap } from "@react-google-maps/api";

const MapContainer = () => {
  const defaultCenter = {
    lat: 45.900002,
    lng: 6.11667,
  };

  return (
    <div className="container" >
      <GoogleMap
        mapContainerStyle={{ height: "100%", width: "100%" }}
        zoom={10}
        center={defaultCenter}
      ></GoogleMap>
    </div>
  );
};

export default MapContainer;
