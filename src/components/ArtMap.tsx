import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { locations } from '../data/mapLocations';
import type { MapLocation } from '../data/mapLocations';

// Importare lo stile di Leaflet
import 'leaflet/dist/leaflet.css';

// Risolvere il problema delle icone di Leaflet in React
import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Definire le icone per i diversi tipi di locazioni
const createIcon = (color: string) => {
  return new Icon({
    iconUrl: markerIconUrl,
    shadowUrl: markerShadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    className: `marker-icon-${color}` // Useremo questo per stilizzare le icone
  });
};

const icons = {
  paleocristiana: createIcon('red'),
  bizantina: createIcon('blue'),
  romanica: createIcon('green')
};

type ArtMapProps = {
  activeSection?: string;
};

const ArtMap = ({ activeSection }: ArtMapProps) => {
  const [filteredLocations, setFilteredLocations] = useState<MapLocation[]>(locations);
  const centerItaly: [number, number] = [42.5, 12.5]; // Centro approssimativo dell'Italia
  
  // Filtra le location in base alla sezione attiva
  useEffect(() => {
    if (activeSection && activeSection !== 'map') {
      setFilteredLocations(locations.filter(loc => loc.type === activeSection));
    } else {
      setFilteredLocations(locations);
    }
  }, [activeSection]);

  return (
    <div className="art-map-container">
      <h2 className="section-title">Mappa dei Luoghi d'Arte</h2>
      <div className="map-legend">
        <div className="legend-item">
          <span className="legend-marker paleocristiana"></span>
          <span>Arte Paleocristiana</span>
        </div>
        <div className="legend-item">
          <span className="legend-marker bizantina"></span>
          <span>Arte Bizantina</span>
        </div>
        <div className="legend-item">
          <span className="legend-marker romanica"></span>
          <span>Arte Romanica</span>
        </div>
      </div>
      <div className="map-wrapper">
        <MapContainer 
          center={centerItaly} 
          zoom={6} 
          scrollWheelZoom={false}
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredLocations.map(location => (
            <Marker 
              key={location.id}
              position={location.coordinates}
              icon={icons[location.type]}
            >
              <Popup>
                <div>
                  <h3>{location.name}</h3>
                  <p>{location.description}</p>
                  <p><em>Periodo: {location.type}</em></p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default ArtMap;
