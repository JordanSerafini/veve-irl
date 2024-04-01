import { GoogleMap } from "@react-google-maps/api";


const MapContainer = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 45.900002,
    lng: 6.11667,
  };


  return (
    <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={10}
      center={defaultCenter}
    ></GoogleMap>
  );
};

export default MapContainer;