import { React } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

function Map(props) {
  const { lat, lng } = props;
  console.log(lat, lng);

  const scrollListener = () => {};

  const icon = L.icon({
    iconRetinaUrl: iconRetina,
    iconUrl: iconMarker,
    shadowUrl: iconShadow,
    iconSize: [25, 35],
  });

  return (
    <div onScroll={scrollListener}>
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker key={Object.id} icon={icon} position={[lat, lng]}>
          <Popup>
            Latitude: {lat} <br />
            Longitude: {lng}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
