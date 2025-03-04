import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import styled from 'styled-components';

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export const H1 = styled.h1`
  color: rgb(124, 16, 119);
  padding-bottom: 50px;
  padding-top: 50px;
`;

const tourLocations = [
  {
    name: 'CHIC',
    description: 'Чекаємо на Вас тут',
    lat: 50.4443419297771,
    lon: 30.415234477297854,
  },
];

export function TourMap() {
  return (
    <>
      <H1>Наше місце роботи</H1>
      <MapContainer
        center={[50.4443419297771, 30.415234477297854]}
        zoom={13}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {tourLocations.map((event, index) => (
          <Marker
            key={index}
            position={[event.lat, event.lon]}
            icon={customIcon}
          >
            <Popup>
              <strong>{event.name}</strong> <br /> <b> {event.description}</b>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
