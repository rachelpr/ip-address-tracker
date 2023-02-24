import { React, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

function Map({ lat, lng }) {
  let position = [lat, lng];
  let zoom = 13;

  function LocationMarker(props) {
    const map = useMap();

    useEffect(() => {
      map.flyTo(props.position, props.zoom);
    });
  }

  const icon = L.icon({
    iconRetinaUrl: iconRetina,
    iconUrl: iconMarker,
    shadowUrl: iconShadow,
    iconSize: [25, 35],
  });

  return (
    <div>
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker key={Object.id} icon={icon} position={position}>
          <Popup>
            Latitude: {lat} <br />
            Longitude: {lng}
          </Popup>
        </Marker>
        <LocationMarker position={position} zoom={zoom} />
      </MapContainer>
    </div>
  );
}

export default Map;
